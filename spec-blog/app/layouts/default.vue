<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/useAuthStore'  
const router = useRouter()
const auth = useAuthStore()  
const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}


const goHome = () => {
  router.push({ path: '/', query: {} })
}


const goFeed = () => {
  router.push({ path: '/', query: { feed: 'true' } })
}

const goWrite = () => {
  if (!auth.isLoggedIn) {
    router.push('/login')
  } else if (auth.user.role === 'admin') {
    router.push('/pages/create')
  } else {
    router.push('/create')
  }
}





const goLogin = () => {
  router.push('/login')
}
</script>


<template>
  <div class="min-h-screen bg-[#F7F4ED] text-zinc-900 flex flex-col font-sans">
    <nav class="sticky top-0 z-50 bg-[#F7F4ED]/90 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NuxtLink to="/" class="text-3xl font-serif font-black tracking-tighter">
          MODERN<span class="text-zinc-400 font-light">BLOG</span>
        </NuxtLink>

        <div class="flex items-center gap-10 text-sm font-semibold tracking-wide text-zinc-600">

          <button @click="goBack" class="hover:text-zinc-900 transition flex items-center gap-1">
            <span>←</span> Back
          </button>

          <button @click="goHome" class="hover:text-zinc-900 transition">
            Home
          </button>

          <button @click="goFeed" class="hover:text-zinc-900 transition font-semibold">
            Feed
          </button>

          <button @click="goWrite" class="hover:text-zinc-900 transition font-semibold">
  Write
</button>


          <button @click="goLogin" class="hover:text-zinc-900 transition">
    Login
  </button>

        </div>
      </div>
    </nav>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="py-6 bg-[#F7F4ED] border-t border-zinc-200/30">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-zinc-400">
        <div class="font-serif font-bold text-sm">ModernBlog.</div>
        <p class="text-[10px] tracking-[0.2em] uppercase">© 2026 Modern Perspectives</p>
      </div>
    </footer>
  </div>
</template>
