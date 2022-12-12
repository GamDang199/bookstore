import { createRouter, createWebHistory } from "vue-router";
// import Home from '../pages/Home/index.vue'

const routes : any= [
    { path: '/', name: 'Home', component: () => import('../pages/Home/index.vue') },
    { path: '/book', name: 'Book', component: () => import('../pages/Book/index.vue') },
    { path: '/author', name: 'Author', component: () => import('../pages/Author/index.vue') },
    { path: '/blog', name: 'Blog', component: () => import('../pages/Blog/index.vue') },
    { path: '/cart', name: 'CartBuyer', component: () => import('../pages/CartBuyer/index.vue') },
    { path: '/manage-book', name: 'ManageBook', component: () => import('../pages/ManageBook/index.vue') },
    { path: '/book-detail', name: 'BookDetail', component: () => import('../pages/BookDetail/index.vue') },
    { path: '/login', name: 'Login', component: () => import('../components/auth/Login.vue') },
    { path: '/signin', name: 'SignIn', component: () => import('../components/auth/Register.vue') },
    { path: '/:catchAll(.*)', name: 'PageNotFound', component: () => import('../pages/PageNotFound/index.vue') },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;