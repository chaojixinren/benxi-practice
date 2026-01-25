<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <!-- 英雄区域 -->
      <section class="bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white py-16 md:py-24">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            贡物新绎 溯产助传
          </h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            大连理工大学软件学院、国际信息与软件学院<br class="hidden md:block">
            甘露公益协会实践成果展示
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-12">
            <div class="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>辽宁省本溪市</span>
            </div>
            <div class="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>2026年1月18日-22日</span>
            </div>
            <div class="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ locationCount }} 个实践地点</span>
            </div>
          </div>

          <!-- 查看地图按钮 -->
          <NuxtLink
            to="/map"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            查看实践地图
          </NuxtLink>
        </div>
      </section>

      <!-- 时间线 - 平铺卡片式 -->
      <section class="py-12 md:py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">实践时间线</h2>
            <p class="text-gray-600">点击卡片查看每日实践详情</p>
          </div>

          <!-- 横向时间轴指示器 -->
          <div class="hidden md:flex items-center justify-center mb-8 max-w-5xl mx-auto">
            <div class="flex items-center w-full">
              <template v-for="(location, index) in sortedLocations" :key="location.id">
                <div class="flex flex-col items-center">
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    :class="getDayBgColor(location.id)"
                  >
                    {{ location.id }}
                  </div>
                  <span class="text-xs text-gray-500 mt-1">{{ formatDate(location.date) }}</span>
                </div>
                <div
                  v-if="index < sortedLocations.length - 1"
                  class="flex-grow h-1 bg-gradient-to-r mx-2"
                  :class="getLineGradient(location.id)"
                />
              </template>
            </div>
          </div>

          <!-- 卡片网格 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <NuxtLink
              v-for="location in sortedLocations"
              :key="location.id"
              :to="`/locations/day${location.id}`"
              class="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <!-- 卡片头部 -->
              <div
                class="h-32 relative overflow-hidden"
                :class="getDayGradient(location.id)"
              >
                <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span class="text-4xl font-bold mb-1">DAY {{ location.id }}</span>
                  <span class="text-sm opacity-80">{{ formatDate(location.date) }}</span>
                </div>
                <!-- 装饰圆圈 -->
                <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
                <div class="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>

              <!-- 卡片内容 -->
              <div class="p-5">
                <h3 class="font-bold text-gray-800 text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {{ location.name }}
                </h3>
                <p class="text-gray-600 text-sm line-clamp-2 mb-4">
                  {{ location.description }}
                </p>

                <!-- 标签 -->
                <div class="flex flex-wrap gap-1.5 mb-4">
                  <span
                    v-for="highlight in (location.highlights || []).slice(0, 2)"
                    :key="highlight"
                    class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {{ highlight }}
                  </span>
                </div>

                <!-- 查看详情 -->
                <div class="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <span>查看详情</span>
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- 实践亮点 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">实践亮点</h2>
            <p class="text-gray-600">探寻文化根脉，助力乡村振兴</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-1">工业遗产</h3>
              <p class="text-sm text-gray-500">中国第一铁</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-1">红色文化</h3>
              <p class="text-sm text-gray-500">义勇军精神</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-1">直播助农</h3>
              <p class="text-sm text-gray-500">6.1万点赞</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-1">非遗传承</h3>
              <p class="text-sm text-gray-500">版画草编</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { sortedLocations, formatDate } = useLocations()

const locationCount = computed(() => sortedLocations.value.length)

// 每天的渐变背景
function getDayGradient(day: number): string {
  const gradients: Record<number, string> = {
    1: 'bg-gradient-to-br from-gray-600 to-gray-800',
    2: 'bg-gradient-to-br from-red-600 to-red-800',
    3: 'bg-gradient-to-br from-cyan-500 to-blue-700',
    4: 'bg-gradient-to-br from-purple-500 to-indigo-700',
    5: 'bg-gradient-to-br from-amber-500 to-orange-700'
  }
  return gradients[day] || 'bg-gradient-to-br from-primary to-primary-800'
}

// 每天的背景色（圆点）
function getDayBgColor(day: number): string {
  const colors: Record<number, string> = {
    1: 'bg-gray-700',
    2: 'bg-red-600',
    3: 'bg-cyan-600',
    4: 'bg-purple-600',
    5: 'bg-amber-600'
  }
  return colors[day] || 'bg-primary'
}

// 连接线渐变
function getLineGradient(day: number): string {
  const gradients: Record<number, string> = {
    1: 'from-gray-400 to-red-400',
    2: 'from-red-400 to-cyan-400',
    3: 'from-cyan-400 to-purple-400',
    4: 'from-purple-400 to-amber-400',
    5: 'from-amber-400 to-primary-400'
  }
  return gradients[day] || 'from-gray-300 to-gray-400'
}

useHead({
  title: '贡物新绎 溯产助传 - 大连理工大学实践成果展示',
  meta: [
    { name: 'description', content: '大连理工大学软件学院、国际信息与软件学院甘露公益协会"贡物新绎·溯产助传"实践团本溪实践成果展示。' }
  ]
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
