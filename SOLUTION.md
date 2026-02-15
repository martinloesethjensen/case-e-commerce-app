# Solution

## Steps

- Refactored old structure to clean architecture with {`domain`, `data`, and `features`}
- Broke `types.ts` into entites and put them in the `domain` folder. (Later refactor to `common` package to be reused in BE)
- Moved shared models to a `shared-models` folder so they can be reused in BE.
- Defined a new models for `Money` and `Currency` which adhere to the Value Object pattern. We can use these models to represent monetary values and currencies in our application. With a growing e-commerce app we can be in need of multiple currencies and amounts.

```json
{
  "amount": 100,
  "currency": {
    "code": "USD",
    "symbol": "$",
    "decimals": 2,
    "name": "United States Dollar"
  }
}
```

- Created usecases for managing cart items and getting products
- View model for the products page
- Refactored cart service with functions and new data structure for storing cart items.
- Using repository pattern and creating api and local sources. The local source is a simple localStorage implementation.
- Implemented a strategy pattern to combine local and remote sources. => `CategoriesApi | CategoriesLocal` & `ProductsApi | ProductsLocal` which are used in the repository pattern.
- Ensuring unidirectional data flow: UI layer => Logic layer => Data layer (and reverse; events from UI and data back).
- Empty state for cart page.

## Patterns used

- Value Object pattern => `Money` and `Currency`
- Null Object pattern => `MoneyUtils.zero`
- Usecases for business logic
- MVVM pattern for separating concerns between the view and the view model.
- Repository pattern for managing data persistence and retrieval.
- Strategy pattern => combining local and remote sources

## Next steps or considerations:

- Implement a more robust error handling mechanism.
  - Could perhaps be a `Result` object to encapsulate success and failure cases.
  - Propagate errors up the chain of responsibility and have error mappers for the UI layer.
- Optimistic state. > assume success before task completion
- Unit tests for all business logic to ensure correctness.
- Integration tests for to validate the system's behavior.
- Offline first approach with api and local sources.
- Use of Nx to manage the project structure and dependencies and utilize clean architecture through tooling.
- CI/CD pipeline for automated testing and deployment.
- Caching strategies for performance optimization.
- Command pattern for handling user actions.
- Extensibility: Using interfaces lets us swap implementations without affecting the rest of the application.
- Testability: Easy to test each component in isolation. Usecases, repositories, and view models.
