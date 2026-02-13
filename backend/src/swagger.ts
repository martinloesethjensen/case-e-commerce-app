import swaggerJsdoc from 'swagger-jsdoc';

export function createSwaggerSpec(port: number) {
  const options: swaggerJsdoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'E-Commerce API',
        version: '1.0.0',
        description: 'A simple e-commerce API for the developer case assessment',
      },
      servers: [
        {
          url: `http://localhost:${port}`,
          description: 'Development server',
        },
      ],
      components: {
        schemas: {
          Category: {
            type: 'object',
            properties: {
              id: { type: 'string', example: 'cat-electronics' },
              name: { type: 'string', example: 'Electronics' },
            },
          },
          Product: {
            type: 'object',
            properties: {
              id: { type: 'string', example: 'prod-1' },
              name: { type: 'string', example: 'Wireless Headphones' },
              icon: { type: 'string', description: 'SVG icon string' },
              price: { type: 'integer', description: 'Price in cents', example: 7999 },
              numInStock: { type: 'integer', example: 15 },
              categoryId: { type: 'string', example: 'cat-electronics' },
            },
          },
          CartItem: {
            type: 'object',
            required: ['productId', 'quantity'],
            properties: {
              productId: { type: 'string', example: 'prod-1' },
              quantity: { type: 'integer', minimum: 1, example: 2 },
            },
          },
          Address: {
            type: 'object',
            required: ['street', 'city', 'postalCode', 'country'],
            properties: {
              street: { type: 'string', example: '123 Main Street' },
              city: { type: 'string', example: 'Copenhagen' },
              postalCode: { type: 'string', example: '1000' },
              country: { type: 'string', example: 'Denmark' },
            },
          },
          Customer: {
            type: 'object',
            required: ['email', 'name', 'address'],
            properties: {
              email: { type: 'string', format: 'email', example: 'john@example.com' },
              name: { type: 'string', example: 'John Doe' },
              address: { $ref: '#/components/schemas/Address' },
            },
          },
          CheckoutRequest: {
            type: 'object',
            required: ['customer', 'items'],
            properties: {
              customer: { $ref: '#/components/schemas/Customer' },
              items: {
                type: 'array',
                items: { $ref: '#/components/schemas/CartItem' },
                minItems: 1,
              },
            },
          },
          OrderLineItem: {
            type: 'object',
            properties: {
              product: { $ref: '#/components/schemas/Product' },
              quantity: { type: 'integer', example: 2 },
              lineTotal: { type: 'integer', description: 'Line total in cents', example: 15998 },
            },
          },
          OrderResponse: {
            type: 'object',
            properties: {
              orderId: { type: 'string', format: 'uuid' },
              customer: { $ref: '#/components/schemas/Customer' },
              items: {
                type: 'array',
                items: { $ref: '#/components/schemas/OrderLineItem' },
              },
              total: { type: 'integer', description: 'Order total in cents', example: 15998 },
              createdAt: { type: 'string', format: 'date-time' },
            },
          },
        },
      },
    },
    apis: ['./src/routes/*.ts'],
  };

  return swaggerJsdoc(options);
}
