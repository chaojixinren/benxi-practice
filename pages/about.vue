<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <!-- 页面标题 -->
      <section class="bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white py-12 md:py-16">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">团队介绍</h1>
          <p class="text-lg text-primary-100 max-w-2xl mx-auto">
            了解"贡物新绎 溯产助传"实践团的故事
          </p>
        </div>
      </section>

      <!-- 团队详细信息 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <TeamInfo />
        </div>
      </section>

      <!-- 实践主题 -->
      <section class="py-12 md:py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">实践主题</h2>
            <p class="text-gray-600">我们的实践聚焦于以下几个核心方向</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <!-- 工业遗产 -->
            <div class="bg-white rounded-xl shadow-md p-6 hover-card">
              <div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 text-lg mb-2">工业遗产</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                探访本溪湖工业遗址群，感悟"中国第一铁"的历史厚重，传承钢铁精神。
              </p>
            </div>

            <!-- 红色文化 -->
            <div class="bg-white rounded-xl shadow-md p-6 hover-card">
              <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 text-lg mb-2">红色文化</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                走进东北抗日义勇军纪念馆，追寻国歌诞生的历史足迹，铭记先烈精神。
              </p>
            </div>

            <!-- 乡村振兴 -->
            <div class="bg-white rounded-xl shadow-md p-6 hover-card">
              <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 text-lg mb-2">乡村振兴</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                深入桓仁渔场，通过直播助农，用数字化手段助力乡村产业发展。
              </p>
            </div>

            <!-- 非遗传承 -->
            <div class="bg-white rounded-xl shadow-md p-6 hover-card">
              <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 text-lg mb-2">非遗传承</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                体验版画草编技艺，感悟匠心传承，探索非遗的时代新生。
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 实践成果 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">实践成果</h2>
            <p class="text-gray-600">我们的实践收获与成果展示</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div class="bg-primary-50 rounded-xl p-6 text-center">
              <p class="text-3xl md:text-4xl font-bold text-primary mb-2">5</p>
              <p class="text-gray-600 text-sm">实践地点</p>
            </div>
            <div class="bg-accent/10 rounded-xl p-6 text-center">
              <p class="text-3xl md:text-4xl font-bold text-accent mb-2">5</p>
              <p class="text-gray-600 text-sm">实践天数</p>
            </div>
            <div class="bg-green-50 rounded-xl p-6 text-center">
              <p class="text-3xl md:text-4xl font-bold text-green-600 mb-2">6.1万</p>
              <p class="text-gray-600 text-sm">直播点赞</p>
            </div>
            <div class="bg-purple-50 rounded-xl p-6 text-center">
              <p class="text-3xl md:text-4xl font-bold text-purple-600 mb-2">4</p>
              <p class="text-gray-600 text-sm">调研主题</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 吉祥物展示 -->
      <section class="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-white to-accent/10">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">团队吉祥物</h2>
            <p class="text-gray-600">认识我们可爱的小伙伴</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <!-- 优米 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div class="aspect-[4/3] overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-50">
                <img
                  src="/images/优米展示.jpg"
                  alt="优米 - 团队吉祥物"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <span class="text-2xl mr-2">🌾</span>
                  <h3 class="text-xl font-bold text-gray-800">优米</h3>
                </div>
                <p class="text-gray-600 text-sm leading-relaxed">
                  活泼可爱、知识渊博的小精灵，对本溪的历史文化、工业遗产和乡村振兴都有深入的了解。喜欢用生动有趣的方式为大家讲解实践故事。
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">活泼开朗</span>
                  <span class="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">知识达人</span>
                  <span class="px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full">热情好客</span>
                </div>
              </div>
            </div>

            <!-- 渔小绎 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div class="aspect-[4/3] overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-50">
                <img
                  src="/images/渔小绎.png"
                  alt="渔小绎 - 团队吉祥物"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <span class="text-2xl mr-2">🐟</span>
                  <h3 class="text-xl font-bold text-gray-800">渔小绎</h3>
                </div>
                <p class="text-gray-600 text-sm leading-relaxed">
                  清新自然、温柔亲切的小鱼形象，来自桓仁的冷水鱼渔场。对生态养殖、乡村产业发展有着独特的见解，用温暖的方式传递实践故事。
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs rounded-full">温柔亲切</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">生态使者</span>
                  <span class="px-3 py-1 bg-teal-100 text-teal-600 text-xs rounded-full">乡村守护</span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-8">
            <p class="text-gray-500 text-sm">
              点击页面左下角的吉祥物图标，与他们互动聊天吧！
            </p>
          </div>
        </div>
      </section>

      <!-- 成员展示区（预留） -->
      <section class="py-12 md:py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">团队成员</h2>
            <p class="text-gray-600">感谢每一位成员的辛勤付出</p>
          </div>

          <!-- 成员卡片占位 -->
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-xl shadow-md p-8 text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p class="text-gray-500">团队成员信息待添加</p>
              <p class="text-gray-400 text-sm mt-2">可在 data/locations.ts 中的 teamInfo.members 数组添加成员信息</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 返回地图 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">探索实践足迹</h2>
          <p class="text-gray-600 mb-8 max-w-xl mx-auto">
            通过互动地图，深入了解我们在本溪的每一个实践地点和精彩故事
          </p>
          <NuxtLink
            to="/map"
            class="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            查看实践地图
          </NuxtLink>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: '团队介绍 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '了解大连理工大学"贡物新绎 溯产助传"实践团，探寻文化根脉，助力乡村振兴。' }
  ]
})
</script>
