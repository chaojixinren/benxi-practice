<template>
  <div class="fixed left-4 bottom-4 z-50">
    <!-- 对话框 -->
    <Transition name="chat-popup">
      <div
        v-if="isOpen"
        class="absolute bottom-20 left-0 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
      >
        <!-- 头部 -->
        <div class="bg-gradient-to-r from-primary to-primary-700 text-white p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img
                :src="mascotImage"
                :alt="mascotName"
                class="w-10 h-10 rounded-full bg-white object-cover"
              />
              <div>
                <h3 class="font-bold">{{ mascotName }}</h3>
                <p class="text-xs text-primary-200">实践团AI助手</p>
              </div>
            </div>
            <button
              @click="toggleChat"
              class="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
              aria-label="关闭对话"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- 消息列表 -->
        <div
          ref="messageContainer"
          class="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50"
        >
          <div
            v-for="message in messages"
            :key="message.id"
            class="flex"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div
              class="max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap"
              :class="
                message.role === 'user'
                  ? 'bg-primary text-white rounded-br-sm'
                  : 'bg-white text-gray-700 rounded-bl-sm shadow-sm'
              "
            >
              {{ message.content }}
            </div>
          </div>

          <!-- 加载中 -->
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-white text-gray-500 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm">
              <div class="flex items-center gap-1">
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- 输入区域 -->
        <div class="p-3 bg-white border-t border-gray-100">
          <form @submit.prevent="handleSubmit" class="flex gap-2">
            <input
              v-model="inputText"
              type="text"
              placeholder="问我关于实践的问题..."
              class="flex-grow px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              :disabled="isLoading"
            />
            <button
              type="submit"
              :disabled="!inputText.trim() || isLoading"
              class="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="发送"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- 吉祥物按钮 -->
    <button
      @click="toggleChat"
      class="relative w-20 h-20 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-primary/20 hover:scale-105 group"
      :class="{ 'ring-4 ring-primary/30': isOpen }"
      aria-label="打开AI助手对话"
    >
      <img
        :src="mascotImage"
        alt="AI助手"
        class="w-full h-full object-cover"
      />
      <!-- 未打开时的提示气泡 -->
      <div
        v-if="!isOpen && !hasInteracted"
        class="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center animate-pulse"
      >
        <span class="text-white text-xs font-bold">!</span>
      </div>
      <!-- 悬停提示 -->
      <div
        v-if="!isOpen"
        class="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        我是{{ mascotName }}，有问题问我~
        <div class="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
const {
  messages,
  isLoading,
  isOpen,
  mascotImage,
  mascotName,
  initMascot,
  sendMessage,
  toggleChat
} = useMascotChat()

const inputText = ref('')
const messageContainer = ref<HTMLElement | null>(null)
const hasInteracted = ref(false)

// 初始化吉祥物形象
onMounted(() => {
  initMascot()
})

// 发送消息
const handleSubmit = () => {
  if (inputText.value.trim()) {
    hasInteracted.value = true
    sendMessage(inputText.value)
    inputText.value = ''
  }
}

// 消息更新时滚动到底部
watch(
  () => messages.value.length,
  () => {
    nextTick(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight
      }
    })
  }
)

// 打开对话框时标记已交互
watch(isOpen, (open) => {
  if (open) {
    hasInteracted.value = true
  }
})
</script>

<style scoped>
/* 对话框弹出动画 */
.chat-popup-enter-active,
.chat-popup-leave-active {
  transition: all 0.3s ease;
}

.chat-popup-enter-from,
.chat-popup-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

/* 自定义滚动条 */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>
