<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50">

    
    <nav class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">Nuxt Journey</div>
      <div class="space-x-6 text-gray-600 font-medium">
        <NuxtLink to="/" class="hover:text-indigo-500 transition">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-indigo-500 transition">About</NuxtLink>
      </div>
    </nav>

    
    <main class="flex-1 container mx-auto p-6">
     
      <slot />
    </main>

    
    <footer class="bg-white shadow-inner py-4 text-center text-gray-500">
      &copy; 2026 Nuxt Journey. All rights reserved.
    </footer>

  </div>
</template>


