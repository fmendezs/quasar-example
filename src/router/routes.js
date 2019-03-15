
const routes = [
  {
    path: '/',
    component: () => import('layouts/Principal.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'buttons', component: () => import('pages/Buttons.vue') },
      { path: 'badge', component: () => import('pages/Badges.vue') },
      { path: 'notify', component: () => import('pages/Notifications.vue') },
      { path: 'ajaxbar', component: () => import('pages/AjaxBar.vue') },
      { path: 'video', component: () => import('pages/Video.vue') },
      { path: 'transition', component: () => import('pages/Transitions.vue') },
      { path: 'alert', component: () => import('pages/Alert.vue') },
      { path: 'timeline', component: () => import('pages/TimeLine.vue') },
      { path: 'parallax', component: () => import('pages/Parallax.vue') }
    ]
  },
  {
    path: '/page1',
    component: () => import('layouts/Layout1.vue'),
    children: [
      { path: '', component: () => import('pages/Date.vue') }
    ]
  },
  {
    path: '/page2',
    component: () => import('layouts/Layout2.vue'),
    children: [
      { path: '', component: () => import('pages/Parties.vue') }
    ]
  },
  {
    path: '/page3',
    component: () => import('layouts/Layout3.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
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
