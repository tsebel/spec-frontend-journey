<script setup>
import { ref } from 'vue'

// reactive count
const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  if (count.value > 0) count.value--
}
</script>

<template>
  <div class="page-container">
    <h1>Counter: {{ count }}</h1>

    <div class="buttons">
      <button class="dec" @click="decrement" :disabled="count === 0">–</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  border-radius: 24px;
  background: #f0f8ff; 
  font-family: sans-serif;
  gap: 20px;
}


h1 {
  font-size: 3em;
  font-weight: bold;
  color: #333;
  margin: 0;
}


.buttons {
  display: flex;
  gap: 20px;
}


button {
  padding: 10px 20px;
  font-size: 1.5em;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: green;
  color: white;
  transition: background 0.2s;
}


button:hover:enabled {
  background-color: #45a049;
}


button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button.dec {
  background: #f44336;  }
</style>
