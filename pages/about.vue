<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <!-- 页面标题 -->
      <section class="bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white py-12 md:py-6">
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
      <section class="py-12 md:py-0">
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

      <!-- 成员展示区 -->
      <section class="py-12 md:py-4 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">团队成员</h2>
            <p class="text-gray-600">感谢每一位成员的辛勤付出</p>
          </div>

          <!-- 成员卡片 -->
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                v-for="(member, index) in teamInfo.members"
                :key="index"
                class="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                :class="{ 'ring-2 ring-primary ring-offset-2': member.role?.includes('队长') }"
              >
                <!-- 头像 -->
                <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {{ member.name.charAt(0) }}
                </div>
                <!-- 姓名 -->
                <p class="font-semibold text-gray-800 mb-1">
                  {{ member.name }}
                  <span v-if="member.role?.includes('队长')" class="inline-block ml-1 px-1.5 py-0.5 bg-primary text-white text-xs rounded">队长</span>
                </p>
                <!-- 班级 -->
                <p class="text-xs text-gray-500 mb-2">{{ member.major }}</p>
                <!-- 分工 -->
                <p class="text-xs text-accent leading-relaxed">
                  {{ member.role?.replace('队长 - ', '') }}
                </p>
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
import { teamInfo } from '~/data/locations'

// SEO
useHead({
  title: '团队介绍 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '了解大连理工大学"贡物新绎 溯产助传"实践团，探寻文化根脉，助力乡村振兴。' }
  ]
})
</script>
