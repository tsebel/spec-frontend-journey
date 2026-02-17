<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/useAuthStore'

const router = useRouter()
const auth = useAuthStore()

let username = ''
let password = ''

const loginUser = () => {
  if (username && password) {
    
    auth.login(username, password)

    
    alert('Logged in successfully!\n\nWelcome Back: ' + username)

    
    if (auth.user.role === 'admin') {
      router.push('/admin')       
    } else {
      router.push({ path: '/', query: { feed: 'true' } }) 
    }
  } else {
    alert('Please enter username and password')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#F7F4ED]">
    <div class="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
      <div class="flex flex-col gap-4">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          class="border p-3 rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="border p-3 rounded"
        />
        <button
          @click="loginUser"
          class="bg-zinc-900 text-white p-3 rounded hover:bg-zinc-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>
