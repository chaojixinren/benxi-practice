<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <NuxtPage />
    <!-- AI 吉祥物对话组件 -->
    <ClientOnly>
      <MascotChat />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// App entry point
</script>
