export default {
  users: {
    component: require("./Users").default,
    reducer: require("./Users/reducer").default
  },
  login: { component: require('./Auth/Login').default },
};
