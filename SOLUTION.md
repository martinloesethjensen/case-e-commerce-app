# Solution

1. Refactored old structure to clean architecture with {domain, data, and features}
2. Broke types into entites and put them in the domain folder. (Later refactor to common package to be reused in BE)
3. Moved shared models to a shared-models folder so they can be reused in BE.
4. Defined a new models for Money and Currency which adhere to the Value Object pattern. We can use these models to represent monetary values and currencies in our application. With a growing e-commerce app we can be in need of multiple currencies and amounts.
   > Price now looks like this

```json
{
  "amount": 100,
  "currency": {
    "code": "USD",
    "symbol": "$",
    "name": "United States Dollar"
  }
}
```
5. Created usecases for managing cart items and getting products
6. View model for the products page

## Next steps or considerations:

- Implement a more robust error handling mechanism.
- Unit tests for all components and services.
- Integration tests for the entire application.
- End-to-end (E2E) tests for the entire application.
- Make use of Nx to manage the project structure and dependencies and utilize clean architecture through tooling.
- Implement a CI/CD pipeline for automated testing and deployment.
- Get currencies endpoint and caching strategy for currencies.
