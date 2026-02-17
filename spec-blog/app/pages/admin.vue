<template>
  <div class="max-w-5xl mx-auto px-6 py-12">

   
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold">Welcome, {{ auth.user.email }}</h2>
      <button
        @click="auth.logout(); router.push('/')"
        class="bg-zinc-900 text-white px-4 py-2 rounded hover:bg-zinc-800 transition"
      >
        Logout
      </button>
    </div>
<section class="space-y-4">
  <h3 class="text-lg font-bold">All Blog Posts</h3>
  <div v-for="post in store.posts" :key="post.id" class="border p-4 rounded flex justify-between items-center">
    <div>
      <h4 class="font-semibold">{{ post.title }}</h4>
      <p class="text-sm text-zinc-600">Category: {{ post.category }}</p>
      <p class="text-sm text-zinc-500">Likes: {{ post.likes }} | Views: {{ post.views }} | Shares: {{ post.shares }}</p>
    </div>
    <div class="space-x-2">
      <button
        @click="store.deletePost(post.id)"
        class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
      >
        Delete
      </button>
    </div>
  </div>
</section>

    
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/useAuthStore'
import { useRouter } from 'vue-router'

import { usePostStore } from '~/stores/usePostStore'
const store = usePostStore()

const auth = useAuthStore()
const router = useRouter()


if (!auth.isLoggedIn || auth.user?.role !== 'admin') {
  router.push('/')
}
</script>
