<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostStore } from '~/stores/usePostStore'

const store = usePostStore()
const router = useRouter()
const route = useRoute()

const postId = Number(route.params.id)

const form = reactive({
  title: '',
  content: '',
  excerpt: '',
  category: 'Tech',
  image: ''
})

// Load the post into the form when page loads
onMounted(() => {
  const post = store.posts.find(p => p.id === postId)
  if (post) {
    form.title = post.title
    form.content = post.content
    form.excerpt = post.excerpt
    form.category = post.category
    form.image = post.image
  } else {
    alert('Post not found')
    router.push('/')
  }
})

// Save changes
const handleUpdate = () => {
  if (!form.title || !form.content) return alert('Please fill in required fields')
  store.updatePost(postId, { ...form })
  router.push('/')
}

// Delete post
const handleDelete = () => {
  if (confirm('Are you sure you want to delete this post?')) {
    store.deletePost(postId)
    router.push('/')
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
    <h2 class="text-2xl font-bold mb-6">Edit Post</h2>

    <input v-model="form.title" placeholder="Title" class="w-full p-3 mb-4 border rounded-lg" />
    
    <select v-model="form.category" class="w-full p-3 mb-4 border rounded-lg">
      <option>Tech</option>
      <option>Lifestyle</option>
      <option>Design</option>
      <option>Productivity</option>
      <option>Philosophy</option>
      <option>Health</option>
      <option>Environment</option>
      <option>Culture</option>
      <option>Business</option>
      <option>Travel</option>
    </select>

    <textarea v-model="form.excerpt" placeholder="Short Excerpt" rows="2" class="w-full p-3 mb-4 border rounded-lg"></textarea>
    <textarea v-model="form.content" placeholder="Content" rows="8" class="w-full p-3 mb-4 border rounded-lg"></textarea>

    <div class="flex gap-4">
      <button @click="handleUpdate" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Update Post</button>
      <button @click="handleDelete" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete Post</button>
    </div>
  </div>
</template>
