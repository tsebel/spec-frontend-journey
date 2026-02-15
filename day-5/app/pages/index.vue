<template>
  <div class="home-container">
    <h1 class="hero-title">Welcome to This Page</h1>
    <p class="hero-text">
      Exploring the magic of file-based routing in Nuxt!
    </p>
    <NuxtLink to="/about" class="hero-button">
      Discover More About This journey
    </NuxtLink>
  </div>
</template>


<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #ffffff, #f9f5ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
}


.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(to right, #6366f1, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fadeIn 1.2s ease-out;
}


.hero-text {
  font-size: 1.3rem;
  color: #4b5563;
  margin: 20px 0 40px;
  max-width: 600px;
  animation: fadeIn 1.2s ease-out 0.3s both;
}


.hero-button {
  padding: 14px 32px;
  background-color: #6366f1;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}


.hero-button:hover {
  background-color: #4f46e5;
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3);
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







