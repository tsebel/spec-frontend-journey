<script setup>
import { ref } from 'vue'
const name = ref('')
</script>

<template>
  
<div>
    <input v-model="name" placeholder="Type your name" />
</div>

<br>

<div>

  <p v-if="name">
    Hello {{ name }}, this is day 2!
  </p>
  
</div>
</template>

<style>
.container {
  text-align: center;
}

p {
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
}

input {
  font-weight: bold;
  font-size: 18px;
  padding: 5px 10px;
  margin: 10px 0;
}
</style>