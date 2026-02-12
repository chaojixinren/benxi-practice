<template>
  <div class="bg-white rounded-xl shadow-xl overflow-hidden">
    <!-- 头部 -->
    <div
      class="relative h-32 bg-cover bg-center"
      :style="{ backgroundImage: `url(/images/d${location.id}/bg.jpg)` }"
    >
      <!-- 关闭按钮 -->
      <button
        class="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
        @click="$emit('close')"
      >
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- 类别标签 -->
      <div
        v-if="location.category"
        class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white"
        :style="{ background: categoryColor }"
      >
        {{ categoryLabel }}
      </div>

      <!-- 地点信息 -->
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <h3 class="text-white font-bold text-xl mb-1">{{ location.name }}</h3>
        <p class="text-white/80 text-sm flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          DAY {{ location.id }} · {{ formattedDate }}
        </p>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="p-4">
      <!-- 描述 -->
      <p class="text-gray-600 text-sm leading-relaxed mb-4">
        {{ location.description }}
      </p>

      <!-- 活动亮点 -->
      <div v-if="location.highlights && location.highlights.length > 0" class="mb-4">
        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">活动亮点</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(highlight, index) in location.highlights"
            :key="index"
            class="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full"
          >
            {{ highlight }}
          </span>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex flex-wrap gap-2">
        <!-- 查看详情 -->
        <NuxtLink
          :to="`/locations/day${location.id}`"
          class="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          查看详情
        </NuxtLink>

        <!-- 观看视频 -->
        <button
          v-if="location.videoUrl"
          class="flex-1 flex items-center justify-center px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors"
          @click="showVideo = true"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          观看视频
        </button>
      </div>
    </div>

    <!-- 视频弹窗 -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="showVideo && location.videoUrl"
          class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          @click.self="showVideo = false"
        >
          <div class="bg-white rounded-xl overflow-hidden w-full max-w-4xl">
            <div class="flex items-center justify-between p-4 border-b">
              <h3 class="font-bold text-gray-800">{{ location.name }} - 实践视频</h3>
              <button
                class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                @click="showVideo = false"
              >
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="aspect-video">
              <VideoPlayer :url="location.videoUrl" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { Location } from '~/types'
import { getCategoryLabel, getCategoryColor } from '~/data/locations'

const props = defineProps<{
  location: Location
}>()

defineEmits<{
  close: []
}>()

const showVideo = ref(false)

const { formatDate } = useLocations()

const formattedDate = computed(() => formatDate(props.location.date))

const categoryLabel = computed(() => {
  return props.location.category ? getCategoryLabel(props.location.category) : ''
})

const categoryColor = computed(() => {
  return props.location.category ? getCategoryColor(props.location.category) : '#003366'
})
</script>
