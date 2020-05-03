# Github repositories search

This is a simple SPA that provides a search tool to look for repositories by name.
<br />
Demo at [https://github-repositories-search.netlify.app/](https://github-repositories-search.netlify.app/)

## Solution architecture

React.js has been used as the main framework and tailwindcss as CSS framwork:

* [React](https://github.com/facebook/react)
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
* [Redux](https://react-redux.js.org/)
* [Redux toolkit](https://redux-toolkit.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [typescript](https://www.typescriptlang.org/)
* [tailwindcss](https://tailwindcss.com/)

An input field is designed for user to input a keyword to be searched on Github, as a result a list of repositories containing the keyword in their name will appear.
By scrolling down the list a new request is sent to fetch more repositories.

## Getting started

These instructions will get you a copy of the project up and running on your local machine. 

### Prerequisites

* Application environment
   ```
   node v13.10.1
   yarn 1.22.0
   ```
* Local development & builds
   ```
   node v13.10.1
   yarn 1.22.0
   ```
* Local development & builds (using Docker)
   ```
   Docker
   ```

### Installing

* Docker
    ```
    cd TO_PROJECT_ROOT
    INIT=1 docker-compose up
    ```
  ```INIT=1``` is needed for the first time to install everything needed.
  
  Use ```docker-compose exec www sh``` to ssh into the container and run ```yarn start```.

* Local
    ```
    cd TO_PROJECT_ROOT
    yarn install
    yarn start
    ```

## Running the tests
```
yarn test
```

### Build
```
yarn build
```
### Run
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment
* [Netlify](https://www.netlify.com/)

## Built With

* [React](https://github.com/facebook/react)
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)


## Author

* **Mohsen Khodadadi** - *Initial work* - [Linkedin](https://www.linkedin.com/in/mohsen-khodadadi/u)
