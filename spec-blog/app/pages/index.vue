<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostStore } from '~/stores/usePostStore'
import { Heart, Share2, Eye } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const store = usePostStore()

const showFeed = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Philosophy', 'Technology', 'Tech', 'Design', 'Productivity', 'Lifestyle', 'Health', 'Travel', 'Business']

const startReading = () => { showFeed.value = true }

const filteredPosts = computed(() => {
  if (!store.posts) return []
  return store.posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'All' || post.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

// Show feed if query feed=true
watch(() => route.query.feed, (newVal) => {
  showFeed.value = newVal === 'true'
}, { immediate: true })

watch(() => route.path, () => {
  if (!route.query.feed) showFeed.value = false
})
</script>

<template>
  <div class="font-serif">

    
    <div v-if="!showFeed" class="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://i.pinimg.com/1200x/ca/25/81/ca2581af036e49cbd8fede187c47c081.jpg" class="w-full h-full object-cover opacity-60 grayscale" alt="bg" />
      </div>
      <div class="relative z-10 text-center px-6 max-w-4xl space-y-8 animate-fade-in">
        <h1 class="text-6xl md:text-9xl leading-[0.85] tracking-tighter font-medium text-zinc-900">Human <br /> stories & ideas.</h1>
        <p class="text-xl md:text-2xl font-sans font-light mx-auto max-w-2xl leading-relaxed text-zinc-700">
          A place to read, write, and deepen your understanding of the world.
        </p>
        <div class="pt-4">
          <button @click="startReading" class="bg-zinc-900 text-white text-xl px-16 py-5 rounded-full shadow-2xl font-sans hover:bg-zinc-800 transition-all transform hover:scale-105">
            Start Blogging
          </button>
        </div>
      </div>
    </div>

    
    <div v-else class="max-w-5xl mx-auto px-6 py-20 font-sans animate-slide-up">

      
      <div class="mb-16 space-y-8">

        
        <div class="relative max-w-lg">
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="Search stories..."
            class="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-zinc-900 transition-colors text-lg italic font-serif"
          />
        </div>

        
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="cat in categories" 
            :key="cat" 
            @click="selectedCategory = cat"
            :class="[
              'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border',
              selectedCategory === cat 
                ? 'bg-zinc-900 text-white border-zinc-900' 
                : 'bg-transparent text-zinc-400 border-zinc-200 hover:border-zinc-900 hover:text-zinc-900'
            ]"
          >
            {{ cat }}
          </button>
        </div>

      </div>

      
      <div class="grid md:grid-cols-2 gap-12 mt-10">
  <div v-for="post in filteredPosts" :key="post.id" class="group space-y-4">
    
    
<NuxtLink :to="`/posts/${post.id}`" class="block">
  <img 
    :src="post.image || 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'"
    class="w-full h-56 object-cover rounded-2xl shadow-md group-hover:scale-[1.02] transition"
  />
  <div class="space-y-2 mt-2">
    <p class="text-xs uppercase tracking-widest text-zinc-400">{{ post.category }}</p>
    <h2 class="text-2xl font-bold group-hover:underline">{{ post.title }}</h2>
    <p class="text-zinc-600 text-sm line-clamp-3">{{ post.content }}</p>
  </div>
</NuxtLink>


<div class="flex gap-6 mt-2 text-gray-500">
  
  <button @click="store.likePost(post.id)" class="hover:text-red-500 transition-colors">
    <Heart class="w-6 h-6 inline" />
    <span class="ml-1 text-sm">{{ post.likes }}</span>
  </button>

  
  <button @click="store.sharePost(post.id)" class="hover:text-green-500 transition-colors">
    <Share2 class="w-6 h-6 inline" />
    <span class="ml-1 text-sm">{{ post.shares }}</span>
  </button>

  
  <!-- <button @click="store.viewPost(post.id)" class="hover:text-purple-500 transition-colors">
    <Eye class="w-6 h-6 inline" />
    <span class="ml-1 text-sm">{{ post.views }}</span>
  </button> -->
</div>

  </div>
</div>


      <!-- No Results -->
      <p v-if="filteredPosts.length === 0" class="text-center text-zinc-400 mt-20 text-lg">
        No stories found.
      </p>

    </div>

  </div>
</template>

<style scoped>
.animate-fade-in { animation: fadeIn 1.2s ease-out forwards; }
.animate-slide-up { animation: slideUp 0.8s ease-out forwards; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>
