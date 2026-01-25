<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow bg-gray-50">
      <!-- 页面标题 -->
      <section class="bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white py-12 md:py-16">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">实践小游戏</h1>
          <p class="text-lg text-primary-100 max-w-2xl mx-auto">
            通过趣味游戏，体验实践团的精彩活动
          </p>
        </div>
      </section>

      <!-- 游戏列表 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <!-- 直播带货达人 -->
            <NuxtLink
              to="/games/live"
              class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div class="h-56 relative overflow-hidden">
                <img src="/images/game/index/live_bg.png" alt="直播带货达人" class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                <!-- 装饰 -->
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                <div class="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full"></div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  直播带货达人
                </h3>
                <p class="text-gray-600 mb-5">
                  化身直播主播，推销本溪特产！点击产品获得点赞，挑战6.1万的实践记录！
                </p>
                <div class="flex items-center justify-end">
                  <span class="text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                    开始游戏
                    <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </NuxtLink>

            <!-- 版画印刷工坊 -->
            <NuxtLink
              to="/games/print"
              class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div class="h-56 relative overflow-hidden">
                <img src="/images/game/index/print_bg.jpg" alt="版画印刷工坊" class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                <!-- 装饰 -->
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                <div class="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full"></div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  版画印刷工坊
                </h3>
                <p class="text-gray-600 mb-5">
                  体验传统版画制作！在画布上雕刻图案，完成3关挑战，感受非遗魅力！
                </p>
                <div class="flex items-center justify-end">
                  <span class="text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                    开始游戏
                    <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- 返回按钮 -->
          <div class="text-center mt-12">
            <NuxtLink
              to="/"
              class="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回首页
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '实践小游戏 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '通过趣味小游戏体验直播助农和非遗版画制作，感受实践团的精彩活动。' }
  ]
})
</script>
