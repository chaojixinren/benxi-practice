<template>
  <section class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- 团队标识 -->
      <div class="flex-shrink-0">
        <div class="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/images/队徽.png"
            alt="团队队徽"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- 团队信息 -->
      <div class="flex-grow">
        <h2 class="text-2xl md:text-3xl font-bold text-primary mb-2">
          {{ team.name }}
        </h2>
        <p class="text-accent font-medium mb-4">{{ team.slogan }}</p>

        <p class="text-gray-600 leading-relaxed mb-6">
          {{ team.description }}
        </p>

        <!-- 信息标签 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex items-start space-x-3">
            <div class="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">所属院校</p>
              <p class="font-medium text-gray-800">{{ team.university }}</p>
              <p v-if="team.college" class="text-sm text-gray-600">{{ team.college }}</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">实践主题</p>
              <p class="font-medium text-gray-800">{{ team.practiceTheme }}</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">实践时间</p>
              <p class="font-medium text-gray-800">{{ team.practiceTime }}</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">实践地点</p>
              <p class="font-medium text-gray-800">{{ team.practiceLocation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { teamInfo } from '~/data/locations'

const team = teamInfo
</script>
