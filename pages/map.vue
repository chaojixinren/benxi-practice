<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <!-- 页面标题 -->
      <section class="bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white py-12 md:py-3">
        <div class="container mx-auto px-3 text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">实践行程地图</h1>
          <p class="text-lg text-primary-100 max-w-2xl mx-auto">
            点击地图上的标记或下方按钮定位到对应地点
          </p>
        </div>
      </section>

      <!-- 地图区域 -->
      <section class="py-6 md:py-3 bg-gray-50 flex-grow">
        <div class="container mx-auto px-4">
          <!-- 互动地图 -->
          <ClientOnly>
            <InteractiveMap ref="mapRef" />
            <template #fallback>
              <div class="map-container bg-gray-200 flex items-center justify-center">
                <div class="text-center text-gray-500">
                  <svg class="w-12 h-12 mx-auto mb-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p>地图加载中...</p>
                </div>
              </div>
            </template>
          </ClientOnly>

          <!-- 地点快速导航 -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            <button
              v-for="location in sortedLocations"
              :key="location.id"
              class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex items-center space-x-3 text-left hover:ring-2 hover:ring-primary/50"
              :class="{ 'ring-2 ring-primary bg-primary-50': activeLocationId === location.id }"
              @click="flyToLocation(location)"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                :style="{ background: getCategoryColor(location.category || 'community') }"
              >
                {{ location.id }}
              </div>
              <div class="flex-grow min-w-0">
                <p class="font-medium text-gray-800 text-sm truncate">{{ location.name }}</p>
                <p class="text-xs text-gray-500">{{ formatDate(location.date) }}</p>
              </div>
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import type { Location } from '~/types'

const { sortedLocations, formatDate, getCategoryColor } = useLocations()

const mapRef = ref<{ selectAndFly: (location: Location) => void } | null>(null)
const activeLocationId = ref<number | null>(null)

// 飞行到指定地点
function flyToLocation(location: Location) {
  activeLocationId.value = location.id
  if (mapRef.value) {
    mapRef.value.selectAndFly(location)
  }
}

useHead({
  title: '实践地图 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '通过互动地图探索大连理工大学"贡物新绎 溯产助传"实践团的实践足迹。' }
  ]
})
</script>
