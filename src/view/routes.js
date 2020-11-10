import pages from './pages';

const getPage = name => pages[name].component;

/* For protected routes, use: protected: true */

export default [
  { path: "/users", component: getPage("users") },
  { path: '/posts', component: getPage('posts'), protected: true },
  { path: '/auth/login', component: getPage('login') },
];
