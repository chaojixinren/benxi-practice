<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <!-- 英雄区域 -->
      <section class="relative text-white py-16 md:py-14 overflow-hidden">
        <!-- 背景图片 -->
        <div class="absolute inset-0">
          <img
            src="/images/bg.jpg"
            alt="本溪实践背景"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary-700/75 to-sky-600/90"></div>
        </div>

        <!-- 底部过渡渐变 -->
        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-200 to-transparent"></div>

        <div class="container mx-auto px-4 text-center relative z-10">
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

      <!-- 时间线 - 火车车厢式 -->
      <section class="pt-2 pb-6 md:pt-4 md:pb-10 bg-gradient-to-b from-sky-200 via-sky-100 to-green-100 overflow-hidden relative">
        <!-- 顶部融合层 -->
        <div class="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-sky-200 to-transparent"></div>


        <div class="container mx-auto px-2">
          <!-- 火车容器 -->
          <div class="relative">
            <!-- 手机端：卡片式时间线 -->
            <div class="md:hidden">
              <!-- 标题带左右GIF -->
              <div class="flex items-center justify-center gap-3 mb-6 relative z-10">
                <!-- 左侧GIF角色 -->
                <div class="flex-shrink-0 w-28">
                  <img
                    src="/gif/渔小绎.gif"
                    alt="渔小绎"
                    class="w-full h-auto drop-shadow-lg"
                  />
                </div>
                <h2 class="text-xl font-bold text-gray-800 text-center">实践行程</h2>
                <!-- 右侧GIF角色 -->
                <div class="flex-shrink-0 w-28">
                  <img
                    src="/gif/优米.gif"
                    alt="优米"
                    class="w-full h-auto drop-shadow-lg"
                  />
                </div>
              </div>

              <!-- 卡片列表 -->
              <div class="space-y-4 px-2">
                <template v-for="(location, index) in sortedLocations" :key="location.id">
                  <NuxtLink
                    :to="`/locations/day${location.id}`"
                    class="block group"
                  >
                    <div class="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]" :class="getCardBackground(location.id)">
                      <!-- 背景图 -->
                      <img
                        :src="`/images/d${location.id}/bg.jpg`"
                        :alt="location.name"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <!-- 遮罩层 -->
                      <div class="absolute inset-0" :class="getDayOverlay(location.id)"></div>
                      <!-- 内容 -->
                      <div class="relative z-10 flex items-center p-4">
                        <!-- DAY标签 -->
                        <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-white border border-white/30">
                          <span class="text-xs font-bold">DAY</span>
                          <span class="text-2xl font-black">{{ location.id }}</span>
                        </div>
                        <!-- 地点信息 -->
                        <div class="ml-4 flex-1">
                          <h3 class="text-lg font-bold text-white drop-shadow-md">{{ location.name }}</h3>
                          <p class="text-sm text-white/80 mt-1 line-clamp-2">{{ location.description || '点击查看详情' }}</p>
                        </div>
                        <!-- 箭头 -->
                        <div class="flex-shrink-0 ml-2">
                          <svg class="w-6 h-6 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </template>
              </div>
            </div>

            <!-- 桌面端：横向火车图片 -->
            <div class="hidden md:block">
              <div class="relative max-w-16xl mx-auto">
                <!-- 火车图片 -->
                <div class="relative train-image-container">
                  <img
                    src="/images/火车.png"
                    alt="本溪五女山号"
                    class="w-full h-auto"
                  />

                  <!-- 车窗入口 - 从右到左排列 -->
                  <template v-for="(location, index) in sortedLocations" :key="location.id">
                    <NuxtLink
                      :to="`/locations/day${location.id}`"
                      class="train-window-link group absolute"
                      :style="getWindowStyle(index)"
                    >
                      <div class="w-full h-full rounded-md overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl" :class="getWindowBorder(location.id)">
                        <!-- 背景图 -->
                        <img
                          :src="`/images/d${location.id}/bg.jpg`"
                          :alt="location.name"
                          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-md"
                        />
                        <!-- 遮罩 -->
                        <div class="absolute inset-0 rounded-md window-overlay" :class="getDayOverlay(location.id)"></div>
                        <!-- 内容 -->
                        <div class="absolute inset-0 flex flex-col items-center justify-center text-white window-content">
                          <span class="text-lg md:text-2xl font-black drop-shadow-lg">DAY</span>
                          <span class="text-2xl md:text-4xl font-black drop-shadow-lg -mt-1">{{ location.id }}</span>
                        </div>
                      </div>
                      <!-- 名称标签 -->
                      <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 px-3 py-1 rounded-full shadow-md text-sm font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        {{ location.name }}
                      </div>
                    </NuxtLink>
                  </template>

                  <!-- 额外车窗 1：GIF 内容（放在火车图层下，通过透明窗户看到） -->
                  <div
                    class="train-window-link train-window-gif group absolute"
                    style="left: 20.2%; top: 27%; width: 8.3%; height: 40%;"
                  >
                    <div class="w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border-3 border-white">
                      <img
                        src="/gif/优米.gif"
                        alt="车窗 GIF 1"
                        class="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <!-- 额外车窗 2：GIF 内容（放在火车图层下，通过透明窗户看到） -->
                  <div
                    class="train-window-link train-window-gif group absolute"
                    style="left: 11%; top: 29%; width: 10.4%; height: 40%;"
                  >
                    <div class="w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border-3 border-white">
                      <img
                        src="/gif/渔小绎.gif"
                        alt="车窗 GIF 2"
                        class="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
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

// 每天的背景图遮罩
function getDayOverlay(day: number): string {
  const overlays: Record<number, string> = {
    1: 'bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70',
    2: 'bg-gradient-to-br from-red-900/70 via-red-800/60 to-red-900/70',
    3: 'bg-gradient-to-br from-cyan-900/70 via-blue-800/60 to-blue-900/70',
    4: 'bg-gradient-to-br from-purple-900/70 via-purple-800/60 to-indigo-900/70',
    5: 'bg-gradient-to-br from-amber-900/70 via-orange-800/60 to-red-900/70'
  }
  return overlays[day] || 'bg-gradient-to-br from-primary/70 to-primary-800/70'
}

// 车窗边框颜色
function getWindowBorder(day: number): string {
  const borders: Record<number, string> = {
    1: 'border-gray-600',
    2: 'border-red-700',
    3: 'border-cyan-600',
    4: 'border-purple-600',
    5: 'border-amber-600'
  }
  return borders[day] || 'border-primary'
}

// 手机端卡片背景边框
function getCardBackground(day: number): string {
  const backgrounds: Record<number, string> = {
    1: 'border-l-4 border-gray-500',
    2: 'border-l-4 border-red-500',
    3: 'border-l-4 border-cyan-500',
    4: 'border-l-4 border-purple-500',
    5: 'border-l-4 border-amber-500'
  }
  return backgrounds[day] || 'border-l-4 border-primary'
}


// 火车图片车窗位置 - 从左到右排列5个入口（DAY1到DAY5）
function getWindowStyle(index: number): Record<string, string> {
  const windowPositions = [
    { left: '33.5%', width: '6.4%'},   // DAY1
    { left: '44%', width: '6.4%' },   // DAY2
    { left: '54.7%', width: '6.4%' },   // DAY3
    { left: '65.6%', width: '6.4%' },   // DAY4
    { left: '76.8%', width: '6.4%' },   // DAY5
  ]

  const pos = windowPositions[index]
  if (!pos) return {}

  return {
    left: pos.left,
    top: '34%',
    width: pos.width,
    height: '22.7%'
  }
}

useHead({
  title: '贡物新绎 溯产助传 - 大连理工大学实践成果展示',
  meta: [
    { name: 'description', content: '大连理工大学软件学院、国际信息与软件学院甘露公益协会"贡物新绎·溯产助传"实践团本溪实践成果展示。' }
  ]
})
</script>

<style scoped>
/* 火车图片容器 */
.train-image-container {
  position: relative;
  width: 100%;
}

@media (min-width: 768px) {
  /* 桌面端放大整列火车（包含车窗） */
  .train-image-container {
    transform: scale(1.1);
    transform-origin: center;
  }
}

/* 火车图片放在 GIF 车窗之上，DAY 车窗之下透出 */
.train-image-container img {
  position: relative;
  z-index: 10;
  pointer-events: none; /* 允许点击穿透到下面的链接 */
}

/* 基础：车窗链接（默认给 GIF 用，放在火车图层下） */
.train-window-link {
  transition: all 0.3s ease;
  z-index: 5;
  cursor: pointer;
}

/* DAY 车窗：盖在火车之上 */
.train-window-link[href] {
  z-index: 10;
}

/* GIF 车窗：显式指定在火车下层（可选，增强语义） */
.train-window-gif {
  z-index: 5;
}

/* 车窗内部图层：保证文字在遮罩之上 */
.window-overlay {
  z-index: 10;
}

.window-content {
  z-index: 20;
}

.train-window-link > div {
  border: 3px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.train-window-link[href]:hover > div {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border-color: #fbbf24;
}

/* 手机端卡片样式 */
@media (max-width: 767px) {
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
