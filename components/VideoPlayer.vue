<template>
  <div class="w-full h-full bg-black">
    <!-- B站视频 -->
    <iframe
      v-if="videoType === 'bilibili'"
      :src="embedUrl"
      class="w-full h-full"
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />

    <!-- 本地/直接视频 -->
    <video
      v-else-if="videoType === 'local'"
      :src="url"
      class="w-full h-full object-contain"
      controls
      playsinline
    >
      您的浏览器不支持视频播放
    </video>

    <!-- YouTube视频 -->
    <iframe
      v-else-if="videoType === 'youtube'"
      :src="embedUrl"
      class="w-full h-full"
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />

    <!-- 未知格式 -->
    <div v-else class="w-full h-full flex items-center justify-center text-white">
      <p>暂不支持此视频格式</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string
}>()

// 检测视频类型
const videoType = computed(() => {
  const url = props.url.toLowerCase()

  if (url.includes('bilibili.com') || url.includes('b23.tv')) {
    return 'bilibili'
  }
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube'
  }
  if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg')) {
    return 'local'
  }
  return 'unknown'
})

// 生成嵌入URL
const embedUrl = computed(() => {
  const url = props.url

  // B站视频处理
  if (videoType.value === 'bilibili') {
    // 支持多种B站链接格式
    // https://www.bilibili.com/video/BV1234567890
    // https://b23.tv/xxxxx
    const bvMatch = url.match(/BV[a-zA-Z0-9]+/)
    if (bvMatch) {
      return `//player.bilibili.com/player.html?bvid=${bvMatch[0]}&high_quality=1&danmaku=0`
    }
    // 如果是aid格式
    const aidMatch = url.match(/av(\d+)/i)
    if (aidMatch) {
      return `//player.bilibili.com/player.html?aid=${aidMatch[1]}&high_quality=1&danmaku=0`
    }
  }

  // YouTube视频处理
  if (videoType.value === 'youtube') {
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/)
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`
    }
  }

  return url
})
</script>
