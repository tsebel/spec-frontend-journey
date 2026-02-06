<script setup>
const props = defineProps(['name', 'role', 'status'])
const emit = defineEmits(['view-profile'])
</script>

<template>
  <div class="user-card" :class="status">
    <h3>
      {{ name }}
      <span v-if="status === 'online'">🟢</span>
      <span v-else>🔴</span>
    </h3>

    <p>{{ role }}</p>

    <button @click="emit('view-profile', name)">
      View Profile
    </button>
  </div>
</template>

<style>
.user-card {
  border: 3px solid white;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  width: 200px;
}

.user-card.online {
  border-color: green;
}

.user-card.offline {
  border-color: red;
}

.user-card h3 {
  font: bold 1.5em sans-serif;
  color: white;
}

.user-card p {
  color: white;
}

button {
  margin-top: 12px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
