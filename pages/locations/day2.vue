<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />

    <main class="flex-grow">
      <!-- 页面头部 -->
      <section class="relative h-[50vh] min-h-[400px] overflow-hidden">
        <!-- 背景图片 -->
        <div class="absolute inset-0">
          <img
            src="/images/d2/bg.jpg"
            alt="东北抗日义勇军纪念馆"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-red-900/70 via-red-800/60 to-red-950/70"></div>
        </div>

        <div class="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div class="flex items-center space-x-3 mb-4">
            <span class="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">DAY 2</span>
            <span class="text-white/70">2026年1月19日</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">东北抗日义勇军纪念馆</h1>
          <p class="text-xl text-white/80 max-w-3xl">民族烽火 · 义勇精神</p>
        </div>

        <!-- 底部渐变 -->
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <!-- 引言 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <blockquote class="max-w-4xl mx-auto text-center">
            <p class="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              "一个民族，如何在绝境中站起；一群普通人，如何用生命定义'勇敢'。有些记忆，必须刻在骨头上；有些精神，必须传给下一代。"
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
                1月19日，我们走进桓仁县东北抗日义勇军纪念馆，深沉的展陈在暖黄灯光里缓缓铺展，<strong class="text-red-700">"民族烽火"</strong>四个烫金大字映入眼帘，瞬间将我们拉回那段山河破碎、热血抗争的岁月。
              </p>
            </div>

            <!-- 第一部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">1</span>
                三省抗日脉络
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                馆内的展墙串联起辽宁、吉林、黑龙江三省民众自发抗日的完整脉络：
              </p>
              <div class="bg-red-50 rounded-xl p-6 mb-6">
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    从辽宁民众自卫军的揭竿而起
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    到吉林抗日武装的山林转战
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    再到黑龙江江桥保卫战的铁血坚守
                  </li>
                </ul>
                <p class="mt-4 text-gray-600 italic">每一寸展线都在诉说着东北儿女不愿做亡国奴的决绝。</p>
              </div>
              <p class="text-gray-600 leading-relaxed">
                那些年轻战士的肖像尤其令人动容，邓铁梅、苗可秀、高志亚……许多人牺牲时不过二十余岁，却以生命为笔，在白山黑水间写下<strong>"宁死不屈"</strong>的誓言。
              </p>
            </div>

            <!-- 图片展示区域 -->
            <div class="grid grid-cols-2 gap-4 mb-12">
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d2/img1.jpg" alt="义勇军纪念馆展厅" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d2/img2.jpg" alt="历史展品" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 第二部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">2</span>
                历史的痕迹
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                在讲解员的带领下，我们一步步走过"义勇军崛起""长城抗战"……泛黄的作战地图上，密密麻麻的标记记录着百余次战斗的轨迹；锈迹斑斑的步枪与马刀旁，陈列着战士们穿过的粗布军装；展柜里的一封封家书，字里行间满是<strong class="text-red-700">"未惜头颅新故国，甘将热血沃中华"</strong>的赤子诚心。
              </p>
            </div>

            <!-- 国歌部分 -->
            <div class="mb-12 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">3</span>
                《义勇军进行曲》
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                当走到《义勇军进行曲》主题展区时，我们停下脚步：原来这首国歌的创作灵感，正是源于东北抗日义勇军的战斗事迹，田汉与聂耳将<strong class="text-red-700">"把我们的血肉筑成我们新的长城"</strong>的呐喊写进旋律，让民族危亡时刻的不屈精神传遍全国。
              </p>
              <p class="text-gray-600 leading-relaxed">
                我们在歌词墙前共同唱响国歌，熟悉的旋律在展厅里回荡，每个音符都满含对先烈的敬意。
              </p>
            </div>

            <!-- 更多图片 -->
            <div class="mb-12">
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d2/img3.jpg" alt="参观纪念馆" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 结语 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">4</span>
                精神传承
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                走出展厅时，窗外的寒风依旧凛冽，但我们的内心却滚烫不已。这次参观让我们明白，东北抗日义勇军的抗争不仅是14年抗战的起点，更孕育了中华民族的精神火种。
              </p>
              <p class="text-gray-600 leading-relaxed">
                那些年轻的生命虽已远去，却用热血点燃了救亡图存的火炬，让"万众一心、抵御外侮"的信念代代相传。作为新时代青年，我们不仅要铭记这段历史，更要让义勇军的精神在当代焕发光彩，让《义勇军进行曲》的旋律永远激励我们前行。
              </p>
            </div>

            <!-- 合照 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">📸</span>
                团队合影
              </h2>
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d2/gp.jpg" alt="实践团合影" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 导航 -->
      <section class="py-8 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center max-w-4xl mx-auto">
            <NuxtLink to="/locations/day1" class="flex items-center text-gray-600 hover:text-primary transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              上一站：本溪湖工业遗址群
            </NuxtLink>
            <NuxtLink to="/locations/day3" class="flex items-center text-primary font-medium hover:text-primary-700 transition-colors">
              下一站：桓仁冷水鱼渔场
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
  title: 'DAY 2 东北抗日义勇军纪念馆 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '实践团走进东北抗日义勇军纪念馆，追寻义勇军精神，感悟国歌诞生的历史。' }
  ]
})
</script>
