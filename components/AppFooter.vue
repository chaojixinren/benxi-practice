<template>
  <footer class="bg-primary-800 text-white mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 团队信息 -->
        <div>
          <h3 class="font-bold text-lg mb-4">贡物新绎 溯产助传</h3>
          <p class="text-primary-200 text-sm leading-relaxed">
            大连理工大学软件学院、国际信息与软件学院甘露公益协会实践团，深入辽宁省本溪市，
            探寻文化根脉，助力乡村振兴。
          </p>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="font-bold text-lg mb-4">实践日志</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/locations/day1" class="text-primary-200 hover:text-white transition-colors">
                DAY 1 · 本溪湖工业遗址群
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/locations/day2" class="text-primary-200 hover:text-white transition-colors">
                DAY 2 · 东北抗日义勇军纪念馆
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/locations/day3" class="text-primary-200 hover:text-white transition-colors">
                DAY 3 · 桓仁冷水鱼渔场
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/locations/day4" class="text-primary-200 hover:text-white transition-colors">
                DAY 4 · 非遗版画草编基地
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/locations/day5" class="text-primary-200 hover:text-white transition-colors">
                DAY 5 · 五女山冰葡萄酒庄园
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div>
          <h3 class="font-bold text-lg mb-4">关于我们</h3>
          <ul class="space-y-2 text-sm text-primary-200">
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>大连理工大学软件学院</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>辽宁省本溪市</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>2026年1月18日-22日</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-primary-700 mt-8 pt-6 text-center text-sm text-primary-300">
        <p>&copy; {{ currentYear }} 大连理工大学软件学院、国际信息与软件学院甘露公益协会"贡物新绎·溯产助传"实践团</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
