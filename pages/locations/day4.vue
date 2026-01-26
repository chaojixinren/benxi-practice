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
                木版年画
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                桓仁木版年画起源于<strong class="text-purple-700">清代中期</strong>，随关内移民传入，并与满族萨满文化、民俗生活深度融合，形成了<strong class="text-purple-700">造型粗犷、色彩浓烈、寓意吉祥</strong>的独特风格。
              </p>
              <p class="text-gray-600 leading-relaxed mb-6">
                其题材不仅包含传统门神、财神、祥瑞图案，更融入了大量反映长白山区渔猎、农耕生活以及满族神话传说的内容（如"嬷嬷人"形象）。在功能上，它不仅是年节装饰，更是承载祈福禳灾、伦理教化功能的民俗用品。
              </p>
              <p class="text-gray-600 leading-relaxed">
                实践团成员在传承人的指导下，亲身体验了版画的制作过程，从选材、雕刻到印刷，每一个步骤都蕴含着匠人的智慧与心血。一刀一刻间，木板上渐渐浮现出栩栩如生的图案，这不仅是技艺的传承，更是文化的延续。
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
                玉米叶编织
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                玉米叶编织技艺源于物资匮乏时期桓仁人民的创造性实践，是<strong class="text-purple-700">"变废为宝、物尽其用"</strong>生态观念的生动体现。主要利用秋收后废弃的玉米苞叶，经过选料、浸泡、染色、编织等多道工序，制作成炕席、坐垫、储物筐、草鞋等生活用品。
              </p>
              <p class="text-gray-600 leading-relaxed mb-6">
                其纹样质朴自然，技法（<strong class="text-purple-700">平编、绞编、缠扣</strong>等）代代相传，不仅解决了实际生活需求，更在编织过程中凝聚了家庭与社区的协作情感，是山地农耕文明"适应自然、利用自然"生存哲学的实物见证。
              </p>
              <p class="text-gray-600 leading-relaxed">
                如今，玉米叶编织已从实用品转向高端工艺品和生态文创品。设计时尚的编织包、家居饰品、艺术装置等，契合当代绿色消费理念，具备形成特色手工产业、带动妇女居家就业的潜力。
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

            <!-- 传承困境与展望 -->
            <div class="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">🔮</span>
                传承与展望
              </h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-bold text-gray-800 mb-3">面临的挑战</h4>
                  <ul class="space-y-2 text-gray-600 text-sm">
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      传承人群断层：核心传承人普遍年事已高，年轻一代学习意愿低
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      市场对接错位：传统产品与现代审美和需求脱节
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      产业生态薄弱：多为家庭式零散化生产，缺乏统一品牌
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-3">创新发展路径</h4>
                  <ul class="space-y-2 text-gray-600 text-sm">
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      文化IP构建：利用动漫、短视频等形式进行当代转译
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      技术赋能：建设沉浸式非遗工坊，开发AR体验应用
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      产业融合：推动"非遗+旅游""非遗+设计"深度融合
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 视频展示 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">🎬</span>
                实践纪录
              </h2>
              <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <video
                  controls
                  class="w-full h-full object-contain"
                  poster="/images/d4/bg.jpg"
                >
                  <source src="/videos/day4.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放
                </video>
              </div>
              <p class="text-center text-gray-500 text-sm mt-3">实践团体验木版年画与玉米叶编织技艺全记录</p>
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
