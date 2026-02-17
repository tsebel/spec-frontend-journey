export default defineNuxtRouteMiddleware((to) => {
  
  const isAuthenticated = true 
  
  if (!isAuthenticated && to.path.includes('/admin')) {
    return navigateTo('/')
  }
})