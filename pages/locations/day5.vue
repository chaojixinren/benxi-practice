<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />

    <main class="flex-grow">
      <!-- 页面头部 -->
      <section class="relative h-[50vh] min-h-[400px] overflow-hidden">
        <!-- 背景图片 -->
        <div class="absolute inset-0">
          <img
            src="/images/d5/bg.jpg"
            alt="五女山冰葡萄酒庄园"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-orange-800/60 to-red-900/70"></div>
        </div>

        <div class="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div class="flex items-center space-x-3 mb-4">
            <span class="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">DAY 5</span>
            <span class="text-white/70">2026年1月22日</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">五女山冰葡萄酒庄园</h1>
          <p class="text-xl text-white/80 max-w-3xl">冰雪酿珍酿 · 产业助振兴</p>
        </div>

        <!-- 底部渐变 -->
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <!-- 引言 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <blockquote class="max-w-4xl mx-auto text-center">
            <p class="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              "冰封的葡萄，时间的珍酿，大自然的馈赠在这里化作琼浆玉液。"
            </p>
          </blockquote>
        </div>
      </section>

      <!-- 主要内容 -->
      <section class="py-8 md:py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- 开篇 -->
            <div class="mb-12">
              <p class="text-gray-600 leading-relaxed text-lg">
                1月22日，实践之旅的最后一站，我们来到了世界文化遗产五女山脚下的冰葡萄酒庄园。桓仁被誉为<strong class="text-amber-700">"中国冰酒之乡"</strong>，这里独特的气候条件造就了品质卓越的冰葡萄酒，冰酒产业已成为当地乡村振兴的重要支柱。
              </p>
            </div>

            <!-- 第一部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">1</span>
                冰酒之乡
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                桓仁地处北纬41度，与加拿大冰酒产区安大略省处于同一纬度带，拥有得天独厚的冰酒酿造条件。每年深冬，当气温降至零下8度以下，葡萄在枝头自然冰冻，此时采摘压榨，才能获得最纯净甘甜的冰葡萄汁。
              </p>
              <p class="text-gray-600 leading-relaxed">
                实践团参观了庄园的葡萄种植基地和酿造车间，了解了从种植、采摘到酿造的全过程，感受到了冰酒酿造的独特魅力和严苛标准。
              </p>
            </div>

            <!-- 图片展示区域 -->
            <div class="grid grid-cols-2 gap-4 mb-12">
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d5/img1.jpg" alt="冰葡萄酒庄园" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d5/img2.jpg" alt="葡萄种植基地" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 第二部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">2</span>
                产业振兴
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                通过与庄园负责人的交流，实践团了解到冰酒产业对当地经济发展的重要带动作用。庄园不仅为当地农民提供了就业机会，还带动了周边旅游、餐饮等相关产业的发展，形成了一条完整的产业链。
              </p>

              <!-- 产业数据 -->
              <div class="grid grid-cols-3 gap-4 my-8">
                <div class="bg-amber-50 rounded-xl p-4 text-center">
                  <p class="text-2xl font-bold text-amber-600">1000+</p>
                  <p class="text-gray-500 text-sm">种植户</p>
                </div>
                <div class="bg-amber-50 rounded-xl p-4 text-center">
                  <p class="text-2xl font-bold text-amber-600">亚洲最大</p>
                  <p class="text-gray-500 text-sm">冰酒产区</p>
                </div>
                <div class="bg-amber-50 rounded-xl p-4 text-center">
                  <p class="text-2xl font-bold text-amber-600">多项金奖</p>
                  <p class="text-gray-500 text-sm">国际认可</p>
                </div>
              </div>

              <p class="text-gray-600 leading-relaxed">
                桓仁冰酒已多次在国际葡萄酒大赛中获奖，品质得到国际市场的认可。"小葡萄"正在成为带动一方百姓致富的"大产业"。
              </p>
            </div>

            <!-- 第三部分 -->
            <div class="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">3</span>
                五女山文化
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                庄园毗邻的五女山山城是世界文化遗产，是高句丽第一座都城，具有重要的历史文化价值。冰酒产业与文化旅游的深度融合，为桓仁打造了一张独特的名片。
              </p>
              <p class="text-gray-600 leading-relaxed">
                游客来到这里，不仅可以品鉴美酒，还能登临五女山，感受厚重的历史文化底蕴，实现了文化传承与产业发展的有机结合。
              </p>
            </div>

            <!-- 结语 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">4</span>
                实践收获
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                五天的实践之旅在这里画上句号，但实践团的收获远不止于此。从本溪湖的钢铁遗迹到桓仁的冰酒庄园，从工业遗产保护到乡村产业振兴，我们见证了辽宁大地上正在发生的美好变化。
              </p>
              <p class="text-gray-600 leading-relaxed">
                <strong class="text-amber-700">"贡物新绎·溯产助传"</strong>，这不仅是我们实践的主题，更是我们作为新时代青年的使命。我们将继续用自己的方式，讲好家乡故事，助力乡村振兴，让更多人了解这片土地上的美好与希望。
              </p>
            </div>

            <!-- 更多图片 -->
            <div class="mb-12">
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d5/img3.jpg" alt="冰酒品鉴" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 冰酒知识 -->
            <div class="mb-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">🍷</span>
                冰酒小百科
              </h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4 text-gray-600">
                  <p><strong class="text-amber-700">什么是冰酒？</strong>冰酒（Icewine）是一种甜葡萄酒，采用在葡萄藤上自然冰冻的葡萄酿制而成。当气温降至零下8度以下时，葡萄中的水分结冰，糖分和风味物质高度浓缩，压榨出的葡萄汁甜度极高。</p>
                  <p><strong class="text-amber-700">为什么桓仁能产冰酒？</strong>桓仁地处北纬41度，与加拿大安大略省、德国莱茵河谷处于同一纬度带，冬季寒冷干燥，具备冰酒酿造所需的极端低温条件。</p>
                </div>
                <div class="bg-white rounded-xl p-4 shadow-sm">
                  <h4 class="font-bold text-gray-800 mb-3 text-center">酿造工艺</h4>
                  <ul class="space-y-2 text-gray-600 text-sm">
                    <li class="flex items-center">
                      <span class="w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                      葡萄在枝头自然冰冻至零下8度以下
                    </li>
                    <li class="flex items-center">
                      <span class="w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                      凌晨手工采摘冰冻葡萄
                    </li>
                    <li class="flex items-center">
                      <span class="w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                      低温压榨保留浓缩精华
                    </li>
                    <li class="flex items-center">
                      <span class="w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                      缓慢发酵数月酿成佳酿
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 视频展示 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">🎬</span>
                实践纪录
              </h2>
              <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <video
                  controls
                  class="w-full h-full object-contain"
                  poster="/images/d5/bg.jpg"
                >
                  <source src="/videos/day5.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放
                </video>
              </div>
              <p class="text-center text-gray-500 text-sm mt-3">实践团参观五女山冰葡萄酒庄园，见证"冰雪酿珍酿"的奇迹</p>
            </div>

            <!-- 合照 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">📸</span>
                团队合影
              </h2>
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d5/gp.jpg" alt="实践团合影" class="w-full h-full object-cover" />
              </div>
            </div>

            <!-- 实践总结卡片 -->
            <div class="bg-gradient-to-r from-primary to-primary-500 rounded-2xl p-8 text-white">
              <h3 class="text-xl font-bold mb-4">实践圆满结束</h3>
              <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div>
                  <p class="text-3xl font-bold">5</p>
                  <p class="text-white/80 text-sm">天</p>
                </div>
                <div>
                  <p class="text-3xl font-bold">5</p>
                  <p class="text-white/80 text-sm">个地点</p>
                </div>
                <div>
                  <p class="text-3xl font-bold">6.1万</p>
                  <p class="text-white/80 text-sm">直播点赞</p>
                </div>
                <div>
                  <p class="text-3xl font-bold">∞</p>
                  <p class="text-white/80 text-sm">收获</p>
                </div>
                <div>
                  <p class="text-3xl font-bold">❤️</p>
                  <p class="text-white/80 text-sm">初心不变</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 导航 -->
      <section class="py-8 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center max-w-4xl mx-auto">
            <NuxtLink to="/locations/day4" class="flex items-center text-gray-600 hover:text-primary transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              上一站：非遗版画草编基地
            </NuxtLink>
            <NuxtLink to="/" class="flex items-center text-primary font-medium hover:text-primary-700 transition-colors">
              返回首页
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
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
  title: 'DAY 5 五女山冰葡萄酒庄园 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '实践团走进五女山冰葡萄酒庄园，了解冰酒产业发展，见证乡村振兴的生动实践。' }
  ]
})
</script>
