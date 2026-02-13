import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { createSwaggerSpec } from './swagger.js';
import categoriesRouter from './routes/categories.js';
import productsRouter from './routes/products.js';
import checkoutRouter from './routes/checkout.js';

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerSpec = createSwaggerSpec(Number(PORT));

// Middleware
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serve OpenAPI spec as JSON
app.get('/api-docs.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/checkout', checkoutRouter);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Root redirect to docs
app.get('/', (_req, res) => {
  res.redirect('/api-docs');
});

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                   E-Commerce API                          ║
╠═══════════════════════════════════════════════════════════╣
║  Server running at:     http://localhost:${PORT}              ║
║  API Documentation:     http://localhost:${PORT}/api-docs     ║
║  OpenAPI Spec (JSON):   http://localhost:${PORT}/api-docs.json║
╚═══════════════════════════════════════════════════════════╝
  `);
});
