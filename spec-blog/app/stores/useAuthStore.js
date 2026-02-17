import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false) 
  const user = ref(null)        
  const login = (email, password) => {
    
    if (email === "admin@blog" && password === "1234") {
      isLoggedIn.value = true
      user.value = { email, role: "admin" }
    } else {
      isLoggedIn.value = true
      user.value = { email, role: "user" }
    }
  }

  
  const logout = () => {
    isLoggedIn.value = false
    user.value = null
  }

  return { isLoggedIn, user, login, logout }
})
