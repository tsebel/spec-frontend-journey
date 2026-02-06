<script setup>
defineProps(['name', 'role'])
</script>

<template>
  <div class="user-card">
    <h3>{{ name }}</h3>
    <p>{{ role }}</p>
  </div>
</template>

<style>
.user-card {
  border: 3px solid  white;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  width:200px;
}

.user-card h3 { font: bold 1.5em sans-serif; color: white; }
.user-card p  { color: white; }
</style>
