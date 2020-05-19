
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue'), name: 'inicio' },
      { path: '/about', component: () => import('pages/About.vue'), name: 'about' },
      { path: '/settings', component: () => import('pages/Configuracion.vue'), name: 'config' },
      { path: '/cambiar-contraseña', component: () => import('pages/CambioContraseña.vue'), name: 'changePass' },
      { path: '/notas', component: () => import('pages/Notas.vue'), name: 'note' }
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
