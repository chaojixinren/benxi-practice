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

      <!-- 吉祥物展示 -->
      <section class="py-12 md:py-16">
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
