const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'signup', component: () => import('./../pages/SignUp.vue') },
      { path: 'login', component: () => import('./../pages/Login.vue') },
      { path: 'classes', component: () => import('./../pages/Classes.vue') },
      { path: 'buy-credit', component: () => import('./../pages/BuyCredit.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
