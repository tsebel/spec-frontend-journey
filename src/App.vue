<template>
  
    <h1>Our Team</h1>
    <br>
    <div class="container">
      <UserCard name="Abebe" role="Frontend Developer" />
      <UserCard name="Kebede" role="Backend Developer" />
      <UserCard name="Nahusenay" role="UI Designer" />
    </div>
  
</template>

<script setup>
import UserCard from './components/UserCard.vue'
</script>

<style>
body {
  justify-content: center;
  align-items: center;
  margin: 0;      
}

h1 {
  font: bold 2.5em sans-serif;
  color: white;
  text-align: center;
  margin: 0 0 40px 0;
}

.container {
  display: flex;
  justify-content: center;    
  max-width: 900px;            
  margin: 0 auto;
  gap: 24px;             
  }
</style>