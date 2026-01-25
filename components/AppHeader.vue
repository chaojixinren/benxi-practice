<template>
  <header class="bg-primary text-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo/标题 -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/images/队徽.png" alt="Logo" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-white" />
          <div class="hidden sm:block">
            <h1 class="font-bold text-lg md:text-xl">贡物新绎 溯产助传</h1>
            <p class="text-xs md:text-sm text-primary-200">大连理工大学实践团</p>
          </div>
        </NuxtLink>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
            to="/"
            class="nav-link text-white/90 hover:text-white transition-colors"
            :class="{ 'text-white font-semibold border-b-2 border-accent': route.path === '/' }"
          >
            首页
          </NuxtLink>
          <NuxtLink
            to="/map"
            class="nav-link text-white/90 hover:text-white transition-colors"
            :class="{ 'text-white font-semibold border-b-2 border-accent': route.path === '/map' }"
          >
            实践地图
          </NuxtLink>
          <NuxtLink
            to="/games"
            class="nav-link text-white/90 hover:text-white transition-colors"
            :class="{ 'text-white font-semibold border-b-2 border-accent': route.path.startsWith('/games') }"
          >
            小游戏
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link text-white/90 hover:text-white transition-colors"
            :class="{ 'text-white font-semibold border-b-2 border-accent': route.path === '/about' }"
          >
            团队介绍
          </NuxtLink>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-primary-700 transition-colors"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="菜单"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <Transition name="slide-up">
        <nav
          v-if="isMenuOpen"
          class="md:hidden py-4 border-t border-primary-700"
        >
          <div class="flex flex-col space-y-2">
            <NuxtLink
              to="/"
              class="px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              @click="isMenuOpen = false"
            >
              首页
            </NuxtLink>
            <NuxtLink
              to="/map"
              class="px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              @click="isMenuOpen = false"
            >
              实践地图
            </NuxtLink>
            <NuxtLink
              to="/games"
              class="px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              @click="isMenuOpen = false"
            >
              小游戏
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              @click="isMenuOpen = false"
            >
              团队介绍
            </NuxtLink>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const route = useRoute()

// 路由变化时关闭菜单
watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>

<style scoped>
.nav-link {
  padding-bottom: 4px;
}
</style>
