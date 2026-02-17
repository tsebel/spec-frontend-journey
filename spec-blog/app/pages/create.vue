<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePostStore } from '~/stores/usePostStore'
import { useAuthStore } from '~/stores/useAuthStore'

const store = usePostStore()
const auth = useAuthStore()
const router = useRouter()

// Protect page: only logged-in users
onMounted(() => {
  if (!auth.isLoggedIn) {
    router.push('/login')
  }
})

// Form state
const form = reactive({
  title: '',
  excerpt: '',
  content: '',
  category: 'Tech'
})

// Save post
const handleSave = () => {
  if (!form.title || !form.content) {
    alert('Please fill in required fields')
    return
  }

  store.addPost({ ...form })
  alert('Post created successfully!')
  router.push('/?feed=true') // redirect to feed after posting
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-20 font-serif">
    <h1 class="text-5xl font-black text-center mb-12">Write Your Story</h1>

    <section class="space-y-6 bg-[#FCFAF6] p-8 rounded-3xl shadow-lg border border-zinc-200">
      <h2 class="text-3xl font-bold text-zinc-900">Draft Your Story</h2>

      <div class="space-y-4">
        <input 
          v-model="form.title" 
          placeholder="Catchy Title" 
          class="w-full bg-white border border-zinc-200 p-4 rounded-xl focus:ring-2 ring-blue-600 outline-none text-zinc-900" 
        />

        <select 
          v-model="form.category" 
          class="w-full bg-white border border-zinc-200 p-4 rounded-xl outline-none text-zinc-900"
        >
          <option>Tech</option>
          <option>Lifestyle</option>
          <option>Design</option>
          <option>Productivity</option>
          <option>Philosophy</option>
        </select>

        <textarea 
          v-model="form.excerpt" 
          placeholder="Short Excerpt..." 
          rows="2" 
          class="w-full bg-white border border-zinc-200 p-4 rounded-xl outline-none text-zinc-900"
        ></textarea>

        <textarea 
          v-model="form.content" 
          placeholder="Write your heart out..." 
          rows="10" 
          class="w-full bg-white border border-zinc-200 p-4 rounded-xl outline-none text-zinc-900"
        ></textarea>
      </div>

      <button 
        @click="handleSave" 
        class="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition shadow-lg"
      >
        Publish Story
      </button>
    </section>
  </div>
</template>