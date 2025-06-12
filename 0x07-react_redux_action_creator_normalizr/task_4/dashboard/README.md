# 0x07. React Redux action creator+normalizr

This project focuses on implementing Redux action creators and using Normalizr for state normalization in a React application.

## Learning Objectives

By the end of this project, you should be able to explain:

- Normalizr's purpose and how to use it
- Schemas and normalization of nested JSON
- Core concepts of Redux
- Redux actions
- Redux action creators
- Async actions in Redux
- How to write tests for Redux

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using node `14.x.x` and `npm 6.x.x`
- A `README.md` file at the root of the project folder is mandatory
- Push all files, including `package.json` and `.babelrc`
- All functions must be exported

## Project Structure

```
task_0/dashboard/
├── src/
│   └── schema/
│       ├── notifications.js
│       └── notifications.test.js
├── notifications.json
├── package.json
├── .babelrc
└── README.md
```

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

To run the tests:
```bash
npm test
```

To run tests in watch mode:
```bash
npm run test-watch
```

## Task 0: Read data from a JSON

This task involves:
- Creating a function `getAllNotificationsByUser` that filters notifications by user ID
- Writing tests to verify the function returns correct data
- Using Jest's `arrayContaining` method for testing

The function should return all context objects from notifications where the author ID matches the provided user ID.

## Files

- `notifications.js`: Contains the main function for filtering notifications
- `notifications.test.js`: Contains tests for the notification filtering function
- `notifications.json`: Sample JSON data with notification objects

## Resources

- [Normalizr](https://github.com/paularmstrong/normalizr)
- [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
- [Redux Getting Started](https://redux.js.org/introduction/getting-started)
- [Redux Actions](https://redux.js.org/basics/actions)
- [Async Actions](https://redux.js.org/advanced/async-actions)
- [Writing tests for Redux](https://redux.js.org/recipes/writing-tests)
