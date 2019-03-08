
const routes = [
  {
    path: '/',
    component: () => import('layouts/Principal.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'buttons', component: () => import('pages/Buttons.vue') },
      { path: 'badge', component: () => import('pages/Badges.vue') },
      { path: 'notify', component: () => import('pages/Notifications.vue') },
      { path: 'ajaxbar', component: () => import('pages/AjaxBar.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
