## Running

Start the [Rails 6 backend](https://github.com/iq9/users-backend-rails) first on port 4000.

```bash
$ bin/rails s --port 4000
```

Then `cd` into this dir and start the frontend:

```bash
$ npm install
$ npm run start
```

## Tools

- [Ant Design](https://ant.design/) Components
- [Axios](https://github.com/axios/axios)
- [Create React App](https://github.com/facebook/create-react-app)
- [Immutability Helper](https://github.com/kolodny/immutability-helper)
- [JSON Server](https://github.com/typicode/json-server)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)

## Tests

Basic Jest Suite is functional.

```sh
$ npm run test
```

- [Enzyme](https://airbnb.io/enzyme/)
- [Jest](https://jestjs.io/)

## Structure

```bash
├── README.md
├── _templates
│   └── page
│       └── new
├── db.json
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── config.js
│   ├── index.js
│   ├── locales
│   │   └── en.json
│   ├── services
│   │   ├── auth.js
│   │   └── http.js
│   ├── setupTests.js
│   ├── store.js
│   ├── utils
│   │   ├── getAllReducers.js
│   │   └── getAllReducers.test.js
│   └── view
│       ├── components
│       ├── layouts
│       ├── pages
│       └── routes.js
├── yarn-error.log
└── yarn.lock
```
## Screenshots

![Screen Shot 2020-11-12 at 12 05 11 AM](https://user-images.githubusercontent.com/214047/98899117-ff239a00-247c-11eb-9b24-2b98b74381cc.png)

![Screen Shot 2020-11-12 at 12 05 19 AM](https://user-images.githubusercontent.com/214047/98899118-ff239a00-247c-11eb-8012-eae60d4dc70b.png)
