const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'signup', component: () => import('./../pages/SignUp.vue') },
      { path: 'login', component: () => import('./../pages/Login.vue') },
      { path: 'classes', component: () => import('./../pages/Classes.vue') },
      { path: 'buy-credit', component: () => import('./../pages/BuyCredit.vue') },
      { path: 'other-credits', component: () => import('./../pages/OtherCredits.vue') },
      { path: 'faq', component: () => import('./../pages/FAQ.vue') },
      { path: 'update-information', component: () => import('./../pages/UpdateInformation.vue') },
      { path: 'profile', component: () => import('./../pages/Profile.vue') },
      { path: 'update-body-measurement', component: () => import('./../pages/UpdateBodyMeasurement.vue') },
      { path: 'fitness-wallet', component: () => import('./../pages/FItnessWallet.vue') }
    ]
  },
  // Always leave this as last one but you can also remove it.
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
