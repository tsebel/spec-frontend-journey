<script setup>
import { ref } from 'vue'
const name = ref('')
</script>

<template>
<div>
  <h1>Hello SPEC Developers</h1>
</div>
<br>
<div>
  <input v-model="name" placeholder="Type your name">
</div>
<br>
<div>
  <p>Hello {{ name }}</p>
</div>
</template>
