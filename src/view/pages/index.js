export default {
  users: {
    component: require("./Users").default,
    reducer: require("./Users/reducer").default
  },
  posts: {
    component: require('./Posts').default,
    reducer: require('./Posts/reducer').default,
  },
  login: { component: require('./Auth/Login').default },
};
