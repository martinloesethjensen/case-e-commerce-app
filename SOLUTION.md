# Solution

1. Refactored old structure to clean architecture with {domain, data, and features}
2. Broke types into entites and put them in the domain folder. (Later refactor to common package to be reused in BE)
3. Moved shared models to a shared-models folder so they can be reused in BE.
4. 

## Next steps or considerations:
- Implement a more robust error handling mechanism.
- Unit tests for all components and services.
- Integration tests for the entire application.
- End-to-end (E2E) tests for the entire application.
- Make use of Nx to manage the project structure and dependencies and utilize clean architecture through tooling.
- Implement a CI/CD pipeline for automated testing and deployment.
