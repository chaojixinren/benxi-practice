<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />

    <main class="flex-grow">
      <!-- 页面头部 -->
      <section class="relative h-[50vh] min-h-[400px] overflow-hidden">
        <!-- 背景图片 -->
        <div class="absolute inset-0">
          <img
            src="/images/d3/bg.jpg"
            alt="桓仁冷水鱼渔场"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-800/60 to-blue-900/70"></div>
        </div>

        <div class="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div class="flex items-center space-x-3 mb-4">
            <span class="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">DAY 3</span>
            <span class="text-white/70">2026年1月20日</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">桓仁冷水鱼渔场</h1>
          <p class="text-xl text-white/80 max-w-3xl">雪落冰湖处，寒水育珍鲜</p>
        </div>

        <!-- 底部渐变 -->
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <!-- 引言 -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <blockquote class="max-w-4xl mx-auto text-center">
            <p class="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              "雪落冰湖处，寒水育珍鲜。"
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
                1月20日，桓仁的清晨被零下20℃的严寒锁定，山风如刃钻透衣隙，实践团的车已碾过积雪盘山公路，向着深山挺进。窗外，林海裹雪静立，渔场木屋隐于雪雾氤氲处，一场与<strong class="text-cyan-700">"水中活化石"细鳞鱼</strong>的冬日暖遇，在寒冽与苍茫间悄然铺展。
              </p>
            </div>

            <!-- 第一部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">1</span>
                深山寻访
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                9:30时车停雪野，等候多时的养鱼大叔踩着积雪迎上，洪亮的乡音瞬间驱散旅途寒意，踏雪而行的"咯吱"声里，仿生态鱼塘的澄澈泉眼正汩汩涌动，银灰色的细鳞鱼摆尾游弋，鳞片映雪，为冰封天地添了灵动生机。
              </p>
            </div>

            <!-- 图片展示区域 -->
            <div class="grid grid-cols-2 gap-4 mb-12">
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d3/img1.jpg" alt="深山渔场" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d3/img2.jpg" alt="细鳞鱼养殖" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 第二部分 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">2</span>
                贡物往事
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                钻进渔场小屋，屋内裹挟着暖意扑面而来。围坐成圈的闲谈中，细鳞鱼的千年<strong class="text-cyan-700">"贡物"</strong>往事缓缓流淌。
              </p>
              <p class="text-gray-600 leading-relaxed">
                寒日里的木屋成了温暖的避风港，也成了实践团探寻"溯产助传"初心的课堂，每一句乡音，都让队员们对助力乡村的信念愈发坚定。大叔话语间满是对这份珍宝的珍视，更藏着渔人数十年的坚守与热忱。
              </p>
            </div>

            <!-- 第三部分 - 直播 -->
            <div class="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">3</span>
                直播助农
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                午后，狭小木屋变身临时直播间！队员们鼻尖泛红、指尖微僵，却个个劲头十足，呵着白气调试设备、梳理话术。2:30直播准时开启，队长对着镜头爽朗开讲，细鳞鱼的生态养殖、雪水滋养的鲜嫩特质娓娓道来，镜头时而扫过雪地鱼塘。
              </p>

              <!-- 直播数据 -->
              <div class="grid grid-cols-2 gap-4 my-6">
                <div class="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p class="text-3xl font-bold text-cyan-600">6.1万</p>
                  <p class="text-gray-500 text-sm">点赞数</p>
                </div>
                <div class="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p class="text-3xl font-bold text-cyan-600">2小时</p>
                  <p class="text-gray-500 text-sm">直播时长</p>
                </div>
              </div>

              <p class="text-gray-600 leading-relaxed">
                木屋里空间局促转身需小心翼翼，可所有人的目光都黏在屏幕跳动的数字上，寒意在炽热的热忱中消融。短短两小时，6.1万次点赞如潮涌来，队员们的欢呼声穿透木屋，在寂静雪野久久回荡。
              </p>
            </div>

            <!-- 更多图片 -->
            <div class="mb-12">
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d3/img3.jpg" alt="直播助农现场" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <!-- 细鳞鱼科普 -->
            <div class="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">🐟</span>
                细鳞鱼档案
              </h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4 text-gray-600">
                  <p><strong class="text-cyan-700">"水中活化石"</strong>——细鳞鱼，学名细鳞鲑，是第四纪冰川时期遗留下来的珍稀冷水性鱼类，对水质、水温要求极为苛刻，只能在清澈、低温的山泉水中生存。</p>
                  <p>桓仁地处长白山余脉，山涧泉水终年清冽，水温常年保持在4-18℃之间，为细鳞鱼提供了得天独厚的生长环境。</p>
                  <p>据史料记载，细鳞鱼早在清代便是进贡皇室的<strong class="text-cyan-700">"贡品"</strong>，因其肉质细嫩、营养丰富而备受青睐，延续千年的"贡鱼"美誉至今流传。</p>
                </div>
                <div class="bg-white rounded-xl p-4 shadow-sm">
                  <h4 class="font-bold text-gray-800 mb-3 text-center">养殖特点</h4>
                  <ul class="space-y-2 text-gray-600 text-sm">
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      仿生态养殖：模拟天然山涧环境
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      泉水养殖：水源来自深山泉眼
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      生长周期长：需3-4年方可上市
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      零污染：全程无抗生素、无添加
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 视频展示 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">🎬</span>
                实践纪录
              </h2>
              <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <video
                  controls
                  class="w-full h-full object-contain"
                  poster="/images/d3/bg.jpg"
                >
                  <source src="/videos/day3.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放
                </video>
              </div>
              <p class="text-center text-gray-500 text-sm mt-3">深入桓仁冷水鱼渔场，探访"水中活化石"的养殖奥秘</p>
            </div>

            <!-- 结语 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">4</span>
                实践初心
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                天色染墨，晚风愈发凛冽如刀，渔场的灯火却在雪夜中愈发明亮。零下20℃的严寒未曾冷却实践热忱，数字化直播带来的成就感滚烫而实在。
              </p>
              <p class="text-gray-600 leading-relaxed">
                这场深山之行，既有自然的清冽、人间的暖意，更有青年用专业助力乡村的力量。<strong class="text-cyan-700">"贡物新绎，溯产助传"</strong>的初心，在寒日暖遇与云端直播中愈发清晰，大工实践团的乡村助力之路，精彩仍在继续。
              </p>
            </div>

            <!-- 合照 -->
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4">📸</span>
                团队合影
              </h2>
              <div class="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img src="/images/d3/gp.jpg" alt="实践团合影" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 导航 -->
      <section class="py-8 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center max-w-4xl mx-auto">
            <NuxtLink to="/locations/day2" class="flex items-center text-gray-600 hover:text-primary transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              上一站：东北抗日义勇军纪念馆
            </NuxtLink>
            <NuxtLink to="/locations/day4" class="flex items-center text-primary font-medium hover:text-primary-700 transition-colors">
              下一站：非遗版画草编基地
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
  title: 'DAY 3 桓仁冷水鱼渔场 - 贡物新绎 溯产助传',
  meta: [
    { name: 'description', content: '实践团深入桓仁冷水鱼渔场，了解细鳞鱼养殖，通过直播助农助力乡村振兴。' }
  ]
})
</script>
