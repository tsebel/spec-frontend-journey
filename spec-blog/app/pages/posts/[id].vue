<script setup>
const route = useRoute()
const store = usePostStore()

// Find the post by ID from the store
const post = computed(() => 
  store.posts.find(p => p.id === parseInt(route.params.id))
)

// Handle 404 if post doesn't exist
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })
}


useSeoMeta({
  title: `${post.value.title} | ModernCMS`,
  description: post.value.excerpt
})
</script>

<template>
  <article v-if="post" class="max-w-3xl mx-auto py-12">
    <NuxtLink to="/?feed=true" class="text-sm font-bold text-blue-600 mb-8 inline-block hover:-translate-x-2 transition-transform">
      ← Back to Stories
    </NuxtLink>

    <header class="mb-10">
      <div class="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
        <span>{{ post.category }}</span>
        <span>•</span>
        <span>{{ post.date }}</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6">
        {{ post.title }}
      </h1>
      <img :src="post.image || 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'" class="w-full h-64 object-cover rounded-2xl shadow-md mb-8" />

    </header>

    <section class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed italic mb-8 border-l-4 border-blue-600 pl-6">
        {{ post.excerpt }}
      </p>
      <div class="text-lg leading-loose space-y-6">
        {{ post.content }}
      </div>
    </section>
  </article>
</template>