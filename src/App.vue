<template>
  <h1>Our Team</h1>
  <br>

  <div class="container">
    <UserCard
      name="Abebe"
      role="Frontend Developer"
      status="online"
      @view-profile="showProfile"
    />

    <UserCard
      name="Kebede"
      role="Backend Developer"
      status="offline"
      @view-profile="showProfile"
    />

    <UserCard
      name="chala"
      role="UI Designer"
      status="online"
      @view-profile="showProfile"
    />
  </div>
</template>

<script setup>
import UserCard from './components/UserCard.vue'

function showProfile(name) {
  alert(`profile of ${name}`)
}
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