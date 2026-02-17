<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Global Transition Styles */
.page-enter-active, .page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-enter-from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
.page-leave-to { opacity: 0; transform: translateY(-20px); filter: blur(10px); }
</style>