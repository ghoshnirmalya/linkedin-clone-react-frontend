## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node 10.8.0](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)

### Installing

Installing the app is very simple and consists of the following steps:

#### Step 1: Clone the app

```
git clone git@github.com:ghoshnirmalya/linkedin-react.git
```

#### Step 2: Go inside the app folder

```
cd linkedin-react
```

#### Step 3: Install the necessary packages

```
yarn install
```

#### Step 4: Run the app

```
yarn start
```

The app will be running at [localhost:3000](http://localhost:3000/).

### Testing

```
yarn test
```

Jest will run all your tests. If you don't have a test file, it'll show the following error:

```
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

You can run e2e tests using Cypress:

```
yarn cypress
```

### Building the app

You can create a production build of you app using the following command:

```
yarn build
```

## Built With

- [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps
- [React Router](https://reacttraining.com/react-router/) - React Router is a collection of navigational components that compose declaratively with your application.
- [Create React App](https://github.com/facebookincubator/create-react-app/) - Create React apps with no build configuration.
- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser.
