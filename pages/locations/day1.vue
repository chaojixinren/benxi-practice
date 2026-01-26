<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />

    <main class="flex-grow">
      <!-- 页面头部 -->
      <section class="relative h-[50vh] min-h-[400px] overflow-hidden">
        <!-- 背景图片 -->
        <div class="absolute inset-0">
          <img
            src="/images/d1/bg.jpg"
            alt="本溪湖工业遗址群"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70"></div>
        </div>

        <div class="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div class="flex items-center space-x-3 mb-4">
            <span class="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">DAY 1</span>
            <span class="text-white/70">2026年1月18日</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">本溪湖工业遗址群</h1>
          <p class="text-xl text-white/80 max-w-3xl">钢铁遗迹 · The Steel Ruins</p>
        </div>

        <!-- 底部渐变 -->
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <!-- 引言 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <blockquote class="max-w-4xl mx-auto text-center">
            <p class="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              "过往的枪炮硝烟与煤灰炉火早已深深埋入皑皑白雪，然而高大的一号锅炉又好像从未停止运转，载着一代代薪火相传的工人意志，又谱写起生生不息的精神传承。"
            </p>
          </blockquote>
        </div>
      </section>

      <!-- 主要内容 -->
      <section class="py-8 md:py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto prose prose-lg">
            <!-- 第一部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">1</span>
                踏雪寻访
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                银装素裹的冬日里，实践团成员踏雪而来，积雪在脚下发出轻柔的声响。洁白的雪层覆盖了遗址的碎石小径，却未掩住红砖的沧桑肌理，高炉的剪影在白雪映衬下更显挺拔。学子们手持团队旗帜，伫立在积雪旁静静凝望。
              </p>
              <p class="text-gray-600 leading-relaxed">
                高炉的钢铁构架虽蒙着岁月尘埃，铆钉与焊缝间仍能想见当年炉火熊熊、铁水奔流的壮阔景象；厂房的窗棂虽已斑驳，却仿佛还回响着先辈们的劳作呐喊。寒风掠过，雪沫轻扬，落在肩头却未觉寒凉，反而让文物承载的历史底蕴愈发清晰。
              </p>
            </div>

            <!-- 图片展示区域 -->
            <div class="grid grid-cols-2 gap-4 mb-12">
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d1/img1.jpg" alt="本溪湖工业遗址" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d1/img2.jpg" alt="钢铁高炉遗迹" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 第二部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">2</span>
                中国第一铁
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                1月18日，我们走进本溪湖工业遗产群，斑驳的红砖厂房在冬日晴空下静静矗立，墙面上<strong class="text-primary">"中国第一铁"</strong>五个大字遒劲有力，穿越时光依旧震撼人心。
              </p>
              <p class="text-gray-600 leading-relaxed mb-6">
                这里诞生了见证共和国钢铁工业起步的<strong>本钢一号炼铁高炉</strong>——这座1917年始建的高炉，曾以领先时代的技术水准扛起民族钢铁业的重任，累计产铁超千万吨，在新中国工业化进程中浇筑下不可磨灭的印记。
              </p>
              <p class="text-gray-600 leading-relaxed">
                作为新中国最早的大型钢铁企业之一，本钢的厂房、高炉与设备，共同镌刻着东北老工业基地从艰难起步到鼎盛辉煌的厚重记忆，成为共和国工业化史诗中浓墨重彩的篇章。
              </p>
            </div>

            <!-- 特色展示 -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div class="bg-gray-50 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">🏭</div>
                <p class="font-medium text-gray-800">FACTORY</p>
                <p class="text-sm text-gray-500">工厂</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">🔥</div>
                <p class="font-medium text-gray-800">BOILER</p>
                <p class="text-sm text-gray-500">锅炉</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">🚃</div>
                <p class="font-medium text-gray-800">CARRIAGE</p>
                <p class="text-sm text-gray-500">车厢</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">🏗️</div>
                <p class="font-medium text-gray-800">CHIMNEY</p>
                <p class="text-sm text-gray-500">烟囱</p>
              </div>
            </div>

            <!-- 第三部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">3</span>
                守护与传承
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                此次探访绝非一次简单的历史回望，更让实践团深刻意识到工业遗产保护的迫切与重要。青年一代站在这片浸润着奋斗精神的土地上，既感悟到先辈筚路蓝缕、自力更生的创业豪情，也明晰了守护工业文物、传承历史记忆的责任担当。
              </p>
              <p class="text-gray-600 leading-relaxed">
                这些承载着"中国第一铁"荣光的厂房、高炉，是不可再生的文化瑰宝，不应在岁月流转中被冰雪与遗忘裹挟。让工业遗产挣脱冰雪的桎梏，在科学保护中焕发新生，才能让<strong class="text-accent">"实业报国"</strong>的精神基因代代相传，让老工业基地的辉煌历史成为滋养新时代发展的不竭动力。
              </p>
            </div>

            <!-- 更多图片 -->
            <div class="mb-12">
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d1/img3.jpg" alt="工业遗产探访" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 遗址档案 -->
            <div class="mb-12 bg-gradient-to-r from-gray-100 to-orange-50 rounded-2xl p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">📋</span>
                遗址档案
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p class="text-2xl font-bold text-primary">13</p>
                  <p class="text-gray-500 text-sm">平方公里核心区</p>
                </div>
                <div class="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p class="text-2xl font-bold text-primary">50+</p>
                  <p class="text-gray-500 text-sm">处工业遗存</p>
                </div>
                <div class="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p class="text-2xl font-bold text-primary">103年</p>
                  <p class="text-gray-500 text-sm">1号高炉运行</p>
                </div>
                <div class="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p class="text-2xl font-bold text-primary">AAAA</p>
                  <p class="text-gray-500 text-sm">国家级景区</p>
                </div>
              </div>
              <div class="space-y-3 text-gray-600">
                <p><strong class="text-gray-800">1号高炉：</strong>1911年投产，高60米，容积328立方米，采用德国克虏伯公司设计，配备电动鼓风机与自动化上料系统，日产铁量达100吨，是中国近代机械化炼铁的开端。</p>
                <p><strong class="text-gray-800">历史地位：</strong>2009年被列为全国重点文物保护单位，2019年获评国家AAAA级旅游景区。2014年12月1号高炉正式熄火，完整保留了从土法炼铁到现代化生产的全链条工业遗存。</p>
                <p><strong class="text-gray-800">"一五计划"贡献：</strong>1953-1957年期间，本钢被列为"156项重点工程"配套项目，累计向鞍钢、武钢供应优质焦炭800万吨，占全国统配焦炭总量的15%。</p>
              </div>
            </div>

            <!-- 视频展示 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">🎬</span>
                实践纪录
              </h2>
              <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <video
                  controls
                  class="w-full h-full object-contain"
                  poster="/images/d1/bg.jpg"
                >
                  <source src="/videos/day1.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放
                </video>
              </div>
              <p class="text-center text-gray-500 text-sm mt-3">实践团探访本溪湖工业遗址群全记录</p>
            </div>

            <!-- 合照 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">📸</span>
                团队合影
              </h2>
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d1/gp.jpg" alt="实践团合影" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 导航 -->
      <section class="py-8 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center max-w-4xl mx-auto">
            <NuxtLink to="/" class="flex items-center text-gray-600 hover:text-primary transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回首页
            </NuxtLink>
            <NuxtLink to="/locations/day2" class="flex items-center text-primary font-medium hover:text-primary-700 transition-colors">
              下一站：东北抗日义勇军纪念馆
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
  title: 'DAY 1 本溪湖工业遗址群 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '实践团走进本溪湖工业遗产群，探访"中国第一铁"的历史遗迹，感悟钢铁精神的传承。' }
  ]
})
</script>
