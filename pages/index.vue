<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <!-- 英雄区域 -->
      <section class="relative text-white py-16 md:py-24 overflow-hidden">
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
      <section class="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-sky-200 via-sky-100 to-green-100 overflow-hidden relative">
        <!-- 顶部融合层 -->
        <div class="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-sky-200 to-transparent"></div>

        <!-- 背景装饰 - 云朵 -->
        <div class="absolute top-16 left-[5%] w-20 h-8 bg-white/70 rounded-full blur-sm"></div>
        <div class="absolute top-12 left-[12%] w-14 h-6 bg-white/50 rounded-full blur-sm"></div>
        <div class="absolute top-24 left-[8%] w-10 h-5 bg-white/40 rounded-full blur-sm"></div>

        <div class="absolute top-20 right-[8%] w-24 h-10 bg-white/60 rounded-full blur-sm"></div>
        <div class="absolute top-14 right-[15%] w-16 h-7 bg-white/40 rounded-full blur-sm"></div>
        <div class="absolute top-28 right-[12%] w-12 h-5 bg-white/50 rounded-full blur-sm"></div>

        <!-- 中间的云朵 -->
        <div class="absolute top-32 left-[30%] w-16 h-6 bg-white/30 rounded-full blur-sm"></div>
        <div class="absolute top-40 right-[35%] w-14 h-5 bg-white/25 rounded-full blur-sm"></div>

        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">实践专列</h2>
            <p class="text-gray-600 text-lg">点击车厢，开启每日精彩旅程</p>
          </div>

          <!-- 火车容器 -->
          <div class="relative">
            <!-- 桌面端：横向火车 -->
            <div class="hidden xl:block">
              <div class="flex items-end justify-center pb-12">
                <!-- 火车头 -->
                <div class="train-head relative mr-0 flex-shrink-0">
                  <!-- 烟囱 -->
                  <div class="absolute -top-16 left-10">
                    <div class="w-10 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg border-2 border-gray-500">
                      <div class="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-gray-500 rounded"></div>
                    </div>
                    <!-- 烟雾 -->
                    <div class="smoke-container absolute -top-6 left-1/2 -translate-x-1/2">
                      <div class="smoke smoke-1"></div>
                      <div class="smoke smoke-2"></div>
                      <div class="smoke smoke-3"></div>
                    </div>
                  </div>

                  <!-- 车头主体 -->
                  <div class="w-44 h-56 bg-gradient-to-b from-primary-500 via-primary-600 to-primary-800 rounded-t-[2rem] rounded-br-[3rem] relative shadow-2xl border-2 border-primary-400">
                    <!-- 顶部装饰线 -->
                    <div class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-t-[2rem]"></div>

                    <!-- 车头徽章 -->
                    <div class="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-200">
                      <div class="text-center">
                        <span class="text-primary-800 font-black text-sm leading-tight block">实践</span>
                        <span class="text-primary-800 font-black text-sm leading-tight block">专列</span>
                      </div>
                    </div>

                    <!-- 车窗 -->
                    <div class="absolute top-32 left-1/2 -translate-x-1/2 w-28 h-12 bg-gradient-to-b from-sky-300 to-sky-400 rounded-lg border-4 border-primary-900 shadow-inner">
                      <div class="absolute inset-1 bg-gradient-to-b from-sky-100 to-sky-200 rounded opacity-50"></div>
                    </div>

                    <!-- 车头底部装饰 -->
                    <div class="absolute bottom-0 left-0 right-0 h-12 bg-primary-900 rounded-br-[2rem] flex items-center justify-center">
                      <div class="w-20 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-md"></div>
                    </div>

                    <!-- 铆钉装饰 -->
                    <div class="absolute top-28 left-3 w-2 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                    <div class="absolute top-28 right-3 w-2 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                  </div>

                  <!-- 车轮 -->
                  <div class="absolute -bottom-6 left-3">
                    <div class="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-gray-500 flex items-center justify-center wheel shadow-lg">
                      <div class="w-6 h-6 bg-gray-400 rounded-full border-2 border-gray-500"></div>
                    </div>
                  </div>
                  <div class="absolute -bottom-6 right-6">
                    <div class="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-gray-500 flex items-center justify-center wheel shadow-lg">
                      <div class="w-6 h-6 bg-gray-400 rounded-full border-2 border-gray-500"></div>
                    </div>
                  </div>

                  <!-- 连接器 -->
                  <div class="absolute -right-4 bottom-12 w-8 h-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded shadow-md border border-gray-500"></div>
                </div>

                <!-- 车厢 -->
                <template v-for="(location, index) in sortedLocations" :key="location.id">
                  <NuxtLink
                    :to="`/locations/day${location.id}`"
                    class="train-car group relative flex-shrink-0"
                  >
                    <!-- 连接器（左侧） -->
                    <div class="absolute -left-4 bottom-16 w-8 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded shadow-md border border-gray-500 z-10"></div>

                    <!-- 车厢主体 -->
                    <div class="w-56 bg-gradient-to-b from-white to-gray-100 rounded-t-2xl shadow-2xl overflow-hidden relative carriage border-2 border-gray-200">
                      <!-- 车顶 -->
                      <div class="h-4 rounded-t-2xl" :class="getDayBgColor(location.id)">
                        <div class="h-full bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl"></div>
                      </div>

                      <!-- 车窗区域（背景图） -->
                      <div class="mx-3 mt-3 rounded-xl overflow-hidden shadow-lg border-4 relative" :class="getWindowBorder(location.id)">
                        <!-- 车窗顶部装饰 -->
                        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-black/20 to-transparent z-10"></div>

                        <div class="h-36 relative overflow-hidden">
                          <img
                            :src="`/images/d${location.id}/bg.jpg`"
                            :alt="location.name"
                            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div class="absolute inset-0" :class="getDayOverlay(location.id)"></div>
                          <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <span class="text-5xl font-black drop-shadow-lg tracking-wider">DAY</span>
                            <span class="text-6xl font-black drop-shadow-lg -mt-2">{{ location.id }}</span>
                            <span class="text-sm opacity-90 drop-shadow mt-1 bg-black/30 px-3 py-0.5 rounded-full">{{ formatDate(location.date) }}</span>
                          </div>
                        </div>
                      </div>

                      <!-- 车厢内容 -->
                      <div class="p-4 text-center">
                        <h3 class="font-bold text-gray-800 text-base group-hover:text-primary transition-colors">
                          {{ location.name }}
                        </h3>
                        <div class="flex items-center justify-center text-primary text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>点击进入</span>
                          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      <!-- 车厢底部装饰 -->
                      <div class="h-5 bg-gradient-to-b from-gray-200 to-gray-300 border-t-2 border-gray-300 flex items-center justify-around px-4">
                        <div class="w-8 h-2 bg-gray-400 rounded"></div>
                        <div class="w-8 h-2 bg-gray-400 rounded"></div>
                      </div>

                      <!-- 铆钉装饰 -->
                      <div class="absolute top-6 left-2 w-2 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                      <div class="absolute top-6 right-2 w-2 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                      <div class="absolute bottom-8 left-2 w-2 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                      <div class="absolute bottom-8 right-2 w-2 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                    </div>

                    <!-- 车轮 -->
                    <div class="absolute -bottom-6 left-6">
                      <div class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-gray-500 flex items-center justify-center wheel shadow-lg">
                        <div class="w-5 h-5 bg-gray-400 rounded-full border-2 border-gray-500"></div>
                      </div>
                    </div>
                    <div class="absolute -bottom-6 right-6">
                      <div class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-gray-500 flex items-center justify-center wheel shadow-lg">
                        <div class="w-5 h-5 bg-gray-400 rounded-full border-2 border-gray-500"></div>
                      </div>
                    </div>

                    <!-- 连接器（右侧） -->
                    <div v-if="index < sortedLocations.length - 1" class="absolute -right-4 bottom-16 w-8 h-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded shadow-md border border-gray-500 z-10"></div>
                  </NuxtLink>
                </template>
              </div>

              <!-- 铁轨 -->
              <div class="relative h-8 max-w-7xl mx-auto">
                <!-- 铁轨主体 -->
                <div class="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-gray-500 to-gray-600 rounded shadow-md"></div>
                <div class="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-b from-gray-500 to-gray-600 rounded shadow-md"></div>
                <!-- 枕木 -->
                <div class="absolute inset-0 flex justify-between px-2">
                  <div v-for="i in 40" :key="i" class="w-4 h-full bg-gradient-to-b from-amber-700 to-amber-900 rounded-sm shadow"></div>
                </div>
              </div>

              <!-- 地面 -->
              <div class="h-4 max-w-7xl mx-auto bg-gradient-to-b from-green-200 to-green-300 rounded-b-lg mt-1"></div>
            </div>

            <!-- 平板/中等屏幕：可滚动的火车 -->
            <div class="hidden md:block xl:hidden">
              <div class="overflow-x-auto pb-12 scrollbar-hide">
                <div class="flex items-end pl-8 pr-8 min-w-max">
                  <!-- 火车头 -->
                  <div class="train-head relative mr-0 flex-shrink-0">
                    <div class="absolute -top-10 left-6">
                      <div class="w-8 h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg"></div>
                      <div class="smoke-container absolute -top-4 left-1/2 -translate-x-1/2">
                        <div class="smoke smoke-1"></div>
                        <div class="smoke smoke-2"></div>
                      </div>
                    </div>
                    <div class="w-36 h-44 bg-gradient-to-b from-primary-500 to-primary-800 rounded-t-3xl rounded-br-3xl relative shadow-xl border-2 border-primary-400">
                      <div class="absolute top-0 left-0 right-0 h-2 bg-yellow-400 rounded-t-3xl"></div>
                      <div class="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-200">
                        <span class="text-primary-800 font-bold text-xs text-center">实践<br/>专列</span>
                      </div>
                      <div class="absolute bottom-16 left-1/2 -translate-x-1/2 w-24 h-10 bg-sky-300 rounded-lg border-4 border-primary-900"></div>
                      <div class="absolute bottom-0 left-0 right-0 h-10 bg-primary-900 rounded-br-2xl flex items-center justify-center">
                        <div class="w-14 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div class="absolute -bottom-5 left-2 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-gray-500 wheel shadow-lg"></div>
                    <div class="absolute -bottom-5 right-4 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-gray-500 wheel shadow-lg"></div>
                    <div class="absolute -right-3 bottom-12 w-6 h-5 bg-gray-600 rounded"></div>
                  </div>

                  <!-- 车厢 -->
                  <template v-for="(location, index) in sortedLocations" :key="location.id">
                    <NuxtLink :to="`/locations/day${location.id}`" class="train-car group relative flex-shrink-0">
                      <div class="absolute -left-3 bottom-14 w-6 h-5 bg-gray-600 rounded z-10"></div>
                      <div class="w-48 bg-gradient-to-b from-white to-gray-100 rounded-t-xl shadow-xl overflow-hidden carriage border-2 border-gray-200">
                        <div class="h-3" :class="getDayBgColor(location.id)"></div>
                        <div class="h-32 relative overflow-hidden mx-2 mt-2 rounded-lg border-4" :class="getWindowBorder(location.id)">
                          <img :src="`/images/d${location.id}/bg.jpg`" :alt="location.name" class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                          <div class="absolute inset-0" :class="getDayOverlay(location.id)"></div>
                          <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <span class="text-4xl font-black drop-shadow-lg">DAY</span>
                            <span class="text-5xl font-black drop-shadow-lg -mt-1">{{ location.id }}</span>
                          </div>
                        </div>
                        <div class="p-3 text-center">
                          <h3 class="font-bold text-gray-800 text-sm">{{ location.name }}</h3>
                        </div>
                        <div class="h-4 bg-gray-200 border-t border-gray-300"></div>
                      </div>
                      <div class="absolute -bottom-5 left-5 w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-gray-500 wheel shadow-lg"></div>
                      <div class="absolute -bottom-5 right-5 w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-gray-500 wheel shadow-lg"></div>
                      <div v-if="index < sortedLocations.length - 1" class="absolute -right-3 bottom-14 w-6 h-5 bg-gray-600 rounded z-10"></div>
                    </NuxtLink>
                  </template>
                </div>
              </div>
              <!-- 铁轨 -->
              <div class="relative h-6 mx-4">
                <div class="absolute inset-x-0 top-0 h-2 bg-gray-500 rounded"></div>
                <div class="absolute inset-x-0 bottom-0 h-2 bg-gray-500 rounded"></div>
              </div>
              <div class="h-3 mx-4 bg-gradient-to-b from-green-200 to-green-300 rounded-b-lg mt-1"></div>
            </div>

            <!-- 手机端：竖向车厢 -->
            <div class="md:hidden">
              <div class="relative pl-10">
                <!-- 竖向铁轨 -->
                <div class="absolute left-3 top-0 bottom-0 w-5">
                  <div class="absolute left-0 inset-y-0 w-1.5 bg-gradient-to-b from-gray-500 to-gray-600 rounded"></div>
                  <div class="absolute right-0 inset-y-0 w-1.5 bg-gradient-to-b from-gray-500 to-gray-600 rounded"></div>
                </div>

                <!-- 火车头 -->
                <div class="relative mb-6 ml-4">
                  <div class="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-5 shadow-xl border-2 border-primary-400">
                    <div class="flex items-center">
                      <div class="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mr-5 shadow-lg border-4 border-yellow-200">
                        <span class="text-primary-800 font-black text-base text-center">实践<br/>专列</span>
                      </div>
                      <div class="text-white">
                        <h3 class="font-bold text-xl">实践专列</h3>
                        <p class="text-primary-200">5站精彩旅程</p>
                      </div>
                    </div>
                  </div>
                  <!-- 轮子 -->
                  <div class="absolute -left-7 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-3 border-gray-500 shadow-lg"></div>
                </div>

                <!-- 车厢 -->
                <div class="space-y-5 ml-4">
                  <NuxtLink
                    v-for="location in sortedLocations"
                    :key="location.id"
                    :to="`/locations/day${location.id}`"
                    class="block group relative"
                  >
                    <div class="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
                      <!-- 顶部装饰 -->
                      <div class="h-2" :class="getDayBgColor(location.id)"></div>

                      <div class="flex p-3">
                        <!-- 车窗（图片） -->
                        <div class="w-32 h-32 relative overflow-hidden rounded-xl flex-shrink-0 border-4 shadow-md" :class="getWindowBorder(location.id)">
                          <img
                            :src="`/images/d${location.id}/bg.jpg`"
                            :alt="location.name"
                            class="absolute inset-0 w-full h-full object-cover"
                          />
                          <div class="absolute inset-0" :class="getDayOverlay(location.id)"></div>
                          <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <span class="text-2xl font-black drop-shadow-lg">DAY</span>
                            <span class="text-4xl font-black drop-shadow-lg -mt-1">{{ location.id }}</span>
                          </div>
                        </div>

                        <!-- 内容 -->
                        <div class="flex-grow pl-4 flex flex-col justify-center">
                          <h3 class="font-bold text-gray-800 text-lg mb-2 group-hover:text-primary transition-colors">
                            {{ location.name }}
                          </h3>
                          <p class="text-gray-500 text-sm mb-3">{{ formatDate(location.date) }}</p>
                          <div class="flex items-center text-primary font-medium">
                            <span>查看详情</span>
                            <svg class="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 轮子 -->
                    <div class="absolute -left-7 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-3 border-gray-500 shadow-lg"></div>
                  </NuxtLink>
                </div>
              </div>
            </div>
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

/* 火车动画 */
.train-car {
  transition: transform 0.3s ease;
}
.train-car:hover {
  transform: translateY(-8px);
}
.train-car:hover .carriage {
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25);
}

/* 车轮旋转动画 */
.wheel {
  animation: wheelSpin 1.5s linear infinite;
  position: relative;
}
.wheel::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 2px;
  background: #666;
  transform-origin: center;
  transform: translate(-50%, -50%);
}
.wheel::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 70%;
  background: #666;
  transform-origin: center;
  transform: translate(-50%, -50%);
}
@keyframes wheelSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 暂停动画（默认暂停，悬停时播放） */
.train-car .wheel {
  animation-play-state: paused;
}
.train-car:hover .wheel {
  animation-play-state: running;
}

/* 烟雾动画 */
.smoke-container {
  width: 40px;
  height: 50px;
}
.smoke {
  position: absolute;
  width: 16px;
  height: 16px;
  background: radial-gradient(circle, rgba(220, 220, 220, 0.9) 0%, rgba(200, 200, 200, 0.6) 50%, transparent 100%);
  border-radius: 50%;
  animation: smokePuff 2.5s ease-out infinite;
}
.smoke-1 {
  left: 0;
  animation-delay: 0s;
}
.smoke-2 {
  left: 12px;
  animation-delay: 0.6s;
}
.smoke-3 {
  left: 6px;
  animation-delay: 1.2s;
}
@keyframes smokePuff {
  0% {
    opacity: 0.9;
    transform: translateY(0) scale(1);
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
    transform: translateY(-40px) scale(2.5);
  }
}

/* 隐藏滚动条 */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* 火车头动画 */
.train-head {
  animation: trainBob 3s ease-in-out infinite;
}
@keyframes trainBob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
</style>
