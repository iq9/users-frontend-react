const config = {
  name: 'my-app',
  api: {
    baseUrl: 'https://users-backend-rails.herokuapp.com',
    auth: {
      namespace: '/auth',
      login: '/login',
      signup: '/signup',
      logout: '/logout',
    },
  },
};

const dev = {
  ...config,
}

const prod = {
  ...config,
  api: {
    ...config.api,
    baseUrl: 'https://users-backend-rails.herokuapp.com',
  },
}

export default (process.env.REACT_APP_STAGE === 'production' ? prod : dev)
