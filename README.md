# Developer Case: E-Commerce Frontend

## Overview

Build a mobile-first e-commerce frontend application, preferably using **Ionic (angular)** and **TypeScript**.

The backend API is provided and ready to use. Your task is to create a functional shopping experience that allows users to browse products, manage a cart, and complete checkout.
The backend is "dumb", meaning it does not maintain any persistent state. The frontend must handle cart state and user interactions.

---

## Getting Started

### Prerequisites

- Node.js 24+
- npm 11+

### Setup

```bash
# Install dependencies
npm install

# Start the backend API
npm run backend

# The API will be available at http://localhost:$PORT (default: 3000)
# Swagger documentation: http://localhost:$PORT/api-docs
```

### Frontend Setup

A scaffold is provided in `frontend/`. See `frontend/README.md` for details.

```bash
# In a second terminal
npm run frontend

# App runs on http://localhost:4200
```

---

## Requirements

### 1. Product Browsing

- Display products
- Consider the UX for products browsing:
  - Category listing
  - Product listing within categories
  - Product details view
- Display stock availability for each product
- You decide how to present the product listing (grid, list, cards, etc.)

### 2. Shopping Cart

- Add products to cart
- View cart contents
- Adjust quantity of items in cart
- **Important:** Quantity cannot exceed available stock (`numInStock`)
- Remove items from cart
- Display cart total
- Cart should persist during the session (page refresh persistence is optional)

### 3. Checkout Flow

Create a checkout form that collects:
- **Email** (with validation)
- **Name** (minimum 2 characters)
- **Address:**
  - Street
  - City
  - Postal code
  - Country

Submit the order to `POST /api/checkout` with the required payload.

### 4. Order Confirmation

After successful checkout, display a confirmation page showing:
- Order ID
- Customer details
- Ordered items with quantities and prices
- Order total

---

## API Reference

Full documentation available at `http://localhost:$PORT/api-docs`

### Notes

- All prices are in **øre** (e.g., `50394` = 503,94 kr)
- Product `icon` field contains an SVG string that can be rendered directly
- The checkout endpoint validates stock availability and returns detailed errors
- The frontend must handle errors gracefully
- The provided frontend is a saffold; feel free to modify as needed.

---

## Considerations while implementing

### Code Quality
- Clean, readable, testable, and maintainable code
- Proper TypeScript usage
- Consistent code style

### Architecture
- Logical file/folder organization
- Separation of concerns
- Reusable components where appropriate

### Functionality
- Proper error handling
- Edge cases considered

### User Experience
- Intuitive navigation
- Clear feedback for user actions
- Mobile-friendly design

---

## Questions?

If something is unclear or you have questions, don't hesitate to ask. Understanding the requirements is part of the evaluation.

We're looking forward to seeing your solution!
