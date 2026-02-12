# Frontend Scaffold

This is a pre-configured **Ionic Angular** scaffold to help you get started.

---

## This is a Starting Point

**The provided structure is a sample, not a prescription.**

We want to see how *you* would architect an application. Feel free to:

- Reorganize and restructure the folder structure to match your preferred patterns
- Rename, split, or merge files and modules as you see fit
- Add abstractions (repositories, use cases, domain models) if that's how you work
- Delete or replace any of the provided code
- Consider: Ionic standards and best practices, but align with your own style

This is your opportunity to demonstrate your structural and architectural skills. We're not just evaluating whether it
works — we're interested in *how* you organize code for maintainability, testability, and clarity.

> There's no single "right" answer. Show us how you think about code organization.

---

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── products/products.page.ts
│   │   ├── cart/cart.page.ts
│   │   ├── checkout/checkout.page.ts
│   │   └── confirmation/
│   │       ├── confirmation.page.ts
│   │       └── confirmation.page.html
│   ├── services/
│   │   ├── api.service.ts      # Currently includes all endpoint calls
│   │   └── cart.service.ts     # TODO: Implement cart state
│   ├── types/index.ts          # Shared types (matches backend)
│   ├── app.component.ts        # Root component
│   └── app.routes.ts           # Routing configured
├── global.scss
└── main.ts
```

## Your Task

Implement the functionality in the pages and complete the `CartService`.

## Backend API

The backend runs at `http://localhost:$PORT`. API documentation: `http://localhost:$PORT/api-docs`

## Helpful Resources

- [Ionic Components](https://ionicframework.com/docs/components)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular Reactive Forms](https://angular.dev/guide/forms/reactive-forms)
