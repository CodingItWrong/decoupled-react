# Decoupled React

An attempt to create a decoupled architecture for frontend apps.

This is the React version. It includes:

- A Vanilla JS data layer, including in-memory persistence and API client
- React for the UI library
- Lightweight bindings between React and the data layer with hooks

A full-featured decoupled app would also have:

- A CSS-only styling library, to decouple it from the UI library
- Cypress for E2E tests, to decouple those from the UI library
