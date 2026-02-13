import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { products } from '../data/seed.js';
import { CheckoutRequest, OrderResponse } from '@common/shared-models';
import { MoneyUtils } from '@common/utils';

const router = Router();

/**
 * @swagger
 * /api/checkout:
 *   post:
 *     summary: Submit an order
 *     tags: [Checkout]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CheckoutRequest'
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderResponse'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.post('/', (req, res) => {
  const body = req.body as CheckoutRequest;
  const errors: string[] = [];

  // Validate customer info
  if (!body.customer) {
    errors.push('Customer information is required');
  } else {
    if (!body.customer.email || !isValidEmail(body.customer.email)) {
      errors.push('Valid email is required');
    }
    if (!body.customer.name || body.customer.name.trim().length < 2) {
      errors.push('Name is required (minimum 2 characters)');
    }
    if (!body.customer.address) {
      errors.push('Address is required');
    } else {
      if (!body.customer.address.street) errors.push('Street address is required');
      if (!body.customer.address.city) errors.push('City is required');
      if (!body.customer.address.postalCode) errors.push('Postal code is required');
      if (!body.customer.address.country) errors.push('Country is required');
    }
  }

  // Validate cart items
  if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
    errors.push('At least one item is required');
  } else {
    for (const item of body.items) {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        errors.push(`Product not found: ${item.productId}`);
        continue;
      }
      if (!item.quantity || item.quantity < 1) {
        errors.push(`Invalid quantity for ${product.name}`);
        continue;
      }
      if (item.quantity > product.numInStock) {
        errors.push(
          `Insufficient stock for ${product.name}: requested ${item.quantity}, available ${product.numInStock}`,
        );
      }
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  // Build order response
  const orderItems = body.items.map((item) => {
    const product = products.find((p) => p.id === item.productId)!;
    return {
      product,
      quantity: item.quantity,
      lineTotal: MoneyUtils.multiply(product.price, item.quantity),
    };
  });

  // We already know the list of order items are not empty
  const currency = orderItems[0].product.price.currency;

  const total = orderItems.reduce(
    (sum, item) => MoneyUtils.add(sum, item.lineTotal),
    MoneyUtils.zero(currency),
  );

  const order: OrderResponse = {
    orderId: uuidv4(),
    customer: body.customer,
    items: orderItems,
    total,
    createdAt: new Date().toISOString(),
  };

  res.json(order);
});

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default router;
