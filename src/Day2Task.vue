<script setup>
import { ref } from 'vue'
const name = ref('')
</script>
<template>
  <div>
    <input v-model="name" placeholder="Type your name" />
  </div>

  <p v-if="name">
    Hello {{ name }}
  </p>
</template>