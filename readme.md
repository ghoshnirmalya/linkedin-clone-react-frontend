# Frontend for a software similar to LinkedIn

[![Build Status](https://travis-ci.org/ghoshnirmalya/linkedin-react.svg?branch=master)](https://travis-ci.org/ghoshnirmalya/linkedin-react) [![Greenkeeper badge](https://badges.greenkeeper.io/ghoshnirmalya/linkedin-react.svg)](https://greenkeeper.io/)

A clone of LinkedIn software with basic functionalities.

<p align="center">
  <img src="https://user-images.githubusercontent.com/6391763/47952048-5689f800-df8f-11e8-9491-472b3cb9ce00.png" alt="Logo">
</p>

## Demo
Please check out the Netlify demo at https://linkedin-react.netlify.com/.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Docker](https://docs.docker.com/)

### Installing

Installing the app is very simple and consists of the following steps:

#### Step 1: Clone the app

```
git clone git@github.com:ghoshnirmalya/linkedin-react.git && cd linkedin-react
```

#### 2. Build the project

```
docker-compose build
```

#### 3. Copy the env files

```
cp .env.development.example .env.development && cp .env.test.example .env.test
```

The app will be running at [localhost:3001](http://localhost:3000/).

## Running the tests

You can run all the specs using the following command:

```
docker exec -it linkedin-react_linkedin.react.web_1 yarn test --watch
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

### Building the app

You can create a production build of you app using the following command:

```
yarn build
```

## Screenshots

### Companies Listing page
<img src="https://user-images.githubusercontent.com/6391763/47951856-b7640100-df8c-11e8-8623-6c3e0764cddb.png" />

### Company Profile page
<img src="https://user-images.githubusercontent.com/6391763/47951857-b7640100-df8c-11e8-8a2a-00325d05749f.png" />

### Users Listing page
<img src="https://user-images.githubusercontent.com/6391763/47951859-b7fc9780-df8c-11e8-8903-0c0efedd9949.png" />

### Jobs Listing page
<img src="https://user-images.githubusercontent.com/6391763/47951858-b7fc9780-df8c-11e8-8a39-eae3742a8989.png" />

## Built With

- [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps
- [React Router](https://reacttraining.com/react-router/) - React Router is a collection of navigational components that compose declaratively with your application
- [Create React App](https://github.com/facebookincubator/create-react-app/) - Create React apps with no build configuration
- [Docker](https://www.docker.com/) - Used to containerize the app
- [Screely](https://www.screely.com/) - Instantly turn your screenshot into a beautiful design mockup

## Contributing

If you find any bugs, please feel free to create an issue for that.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
