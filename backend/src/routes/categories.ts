import {Router} from 'express';
import {categories, products} from '../data/seed.js';

const router = Router();

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/', (_req, res) => {
    res.json(categories);
});

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get a single category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 */
router.get('/:id', (req, res) => {
    const category = categories.find((c) => c.id === req.params.id);
    if (!category) {
        return res.status(404).json({error: 'Category not found'});
    }
    res.json(category);
});

/**
 * @swagger
 * /api/categories/{id}/products:
 *   get:
 *     summary: Get all products in a category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: List of products in the category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: Category not found
 */
router.get('/:id/products', (req, res) => {
    const category = categories.find((c) => c.id === req.params.id);
    if (!category) {
        return res.status(404).json({error: 'Category not found'});
    }
    const categoryProducts = products.filter((p) => p.categoryId === req.params.id);
    res.json(categoryProducts);
});

export default router;
