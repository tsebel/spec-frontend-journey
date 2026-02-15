<template>
  <div class="about-container">
    <h1 class="about-title">About This Journey</h1>
    <p class="about-text">
      This journey is from Vue basics to Nuxt file-based routing.
    </p>
    <div class="button-group">
      <NuxtLink to="/" class="back-button">
        ← Back to Home
      </NuxtLink>
     
    </div>
  </div>
</template>


<style scoped>
.about-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f9f5ff, #ffffff, #f0f4ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
}


.about-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  background: linear-gradient(to right, #a855f7, #6366f1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


.about-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #4b5563;
  max-width: 700px;
  margin-bottom: 50px;
  animation: fadeIn 1.2s ease-out 0.4s both;
}


.button-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}


.back-button{
  padding: 14px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  background-color: white;
  border: 2px solid #6366f1;
  color: #6366f1;
}


.back-button:hover {
  background-color: #f0f4ff;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>