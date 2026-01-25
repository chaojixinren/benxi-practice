<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />

    <main class="flex-grow">
      <!-- 页面头部 -->
      <section class="relative h-[50vh] min-h-[400px] overflow-hidden">
        <!-- 背景图片 -->
        <div class="absolute inset-0">
          <img
            src="/images/d4/bg.jpg"
            alt="非遗版画草编传承体验基地"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-purple-800/60 to-indigo-900/70"></div>
        </div>

        <div class="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div class="flex items-center space-x-3 mb-4">
            <span class="px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">DAY 4</span>
            <span class="text-white/70">2026年1月21日</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">非遗版画草编传承体验基地</h1>
          <p class="text-xl text-white/80 max-w-3xl">匠心传承 · 非遗新生</p>
        </div>

        <!-- 底部渐变 -->
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <!-- 引言 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <blockquote class="max-w-4xl mx-auto text-center">
            <p class="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              "一刀一刻皆匠心，一丝一缕见传承。"
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
                1月21日，实践团来到桓仁县非遗版画草编传承体验基地，这里是传统文化保护与传承的重要阵地。在这个承载着岁月记忆的空间里，古老的技艺正在焕发新的生机。
              </p>
            </div>

            <!-- 第一部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">1</span>
                版画艺术
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                版画是中国传统艺术的重要组成部分，在桓仁有着深厚的历史底蕴。实践团成员在传承人的指导下，亲身体验了版画的制作过程，从选材、雕刻到印刷，每一个步骤都蕴含着匠人的智慧与心血。
              </p>
              <p class="text-gray-600 leading-relaxed">
                一刀一刻间，木板上渐渐浮现出栩栩如生的图案，这不仅是技艺的传承，更是文化的延续。
              </p>
            </div>

            <!-- 图片展示区域 -->
            <div class="grid grid-cols-2 gap-4 mb-12">
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d4/img1.jpg" alt="版画制作体验" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d4/img2.jpg" alt="草编技艺展示" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 第二部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">2</span>
                草编技艺
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                草编是劳动人民智慧的结晶，取材于自然，回归于生活。在传承人的巧手中，普通的稻草、玉米皮化身为精美的工艺品——篮筐、草帽、摆件，每一件都凝聚着朴实的乡土情怀。
              </p>
              <p class="text-gray-600 leading-relaxed">
                实践团成员亲手尝试编织，虽然手法生疏，但在传承人耐心指导下，也完成了简单的作品，深刻体会到了这门技艺的不易与珍贵。
              </p>
            </div>

            <!-- 非遗特色展示 -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div class="bg-purple-50 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">🎨</div>
                <p class="font-medium text-gray-800">版画</p>
                <p class="text-sm text-gray-500">木刻艺术</p>
              </div>
              <div class="bg-purple-50 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">🧺</div>
                <p class="font-medium text-gray-800">草编</p>
                <p class="text-sm text-gray-500">编织技艺</p>
              </div>
              <div class="bg-purple-50 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">👨‍🏫</div>
                <p class="font-medium text-gray-800">传承</p>
                <p class="text-sm text-gray-500">师徒相授</p>
              </div>
              <div class="bg-purple-50 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">💡</div>
                <p class="font-medium text-gray-800">创新</p>
                <p class="text-sm text-gray-500">时代新生</p>
              </div>
            </div>

            <!-- 第三部分 -->
            <div class="mb-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">3</span>
                非遗新生
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                在与传承人的交流中，实践团了解到非遗保护面临的挑战：年轻人外出务工，愿意静下心学习传统技艺的人越来越少。但可喜的是，近年来随着国家对非遗保护力度的加大，以及"文创+"模式的兴起，这些古老的技艺正在以新的方式走进年轻人的生活。
              </p>
              <p class="text-gray-600 leading-relaxed">
                基地也在探索将传统技艺与现代设计相结合，开发出更多符合当代审美的文创产品，让非遗不再是博物馆里的陈列品，而是可以走进千家万户的生活艺术。
              </p>
            </div>

            <!-- 结语 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">4</span>
                传承使命
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                这次体验让实践团成员深刻认识到，<strong class="text-purple-700">非遗不仅是技艺的传承，更是文化自信的根基</strong>。作为新时代青年，我们有责任让更多人了解这些宝贵的文化遗产，用我们的方式助力非遗传播与发展。
              </p>
              <p class="text-gray-600 leading-relaxed">
                "贡物新绎·溯产助传"，我们希望通过自己的力量，让这些承载着先辈智慧的技艺，在新时代绽放出更加绚丽的光彩。
              </p>
            </div>

            <!-- 更多图片 -->
            <div class="mb-12">
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d4/img3.jpg" alt="非遗体验活动" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 合照 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">📸</span>
                团队合影
              </h2>
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d4/gp.jpg" alt="实践团合影" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 导航 -->
      <section class="py-8 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center max-w-4xl mx-auto">
            <NuxtLink to="/locations/day3" class="flex items-center text-gray-600 hover:text-primary transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              上一站：桓仁冷水鱼渔场
            </NuxtLink>
            <NuxtLink to="/locations/day5" class="flex items-center text-primary font-medium hover:text-primary-700 transition-colors">
              下一站：五女山冰葡萄酒庄园
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
  title: 'DAY 4 非遗版画草编传承体验基地 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '实践团走进非遗版画草编传承体验基地，体验传统技艺，感悟非遗传承的时代意义。' }
  ]
})
</script>
