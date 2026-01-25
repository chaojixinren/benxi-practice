<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- 背景图片 -->
    <div class="absolute inset-0">
      <img src="/images/game/live/bg.jpg" alt="背景" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-blue-900/70 to-indigo-900/80"></div>
    </div>

    <main class="flex-grow flex items-center justify-center p-4 relative z-10">
      <div class="w-full max-w-2xl">
        <!-- 游戏开始界面 -->
        <div v-if="gameState === 'ready'" class="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <h1 class="text-2xl font-bold text-gray-800 mb-2">直播带货达人</h1>
          <p class="text-gray-600 mb-6">
            化身直播主播，点击屏幕上出现的本溪特产进行推荐！<br>
            30秒内获得尽可能多的点赞，挑战实践团6.1万的记录！
          </p>

          <div class="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <h3 class="font-bold text-gray-700 mb-2">游戏规则：</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-center gap-2">
                <img src="/images/game/live/fish.png" alt="细鳞鱼" class="w-6 h-6 object-contain" />
                细鳞鱼 +100 点赞
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/game/live/wine.png" alt="冰葡萄酒" class="w-6 h-6 object-contain" />
                冰葡萄酒 +150 点赞
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/game/live/rice.png" alt="桓仁贡米" class="w-6 h-6 object-contain" />
                桓仁贡米 +80 点赞
              </li>
              <li>⭐ 超级热门 +500 点赞</li>
              <li>👎 差评 -200 点赞（避开它！）</li>
              <li>🔥 连击Combo可获得额外加成</li>
            </ul>
          </div>

          <button
            @click="startGame"
            class="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
          >
            开始直播
          </button>

          <NuxtLink to="/games" class="inline-block mt-4 text-gray-500 hover:text-gray-700 transition-colors">
            返回游戏大厅
          </NuxtLink>
        </div>

        <!-- 游戏进行界面 -->
        <div v-else-if="gameState === 'playing'" class="relative">
          <!-- 顶部状态栏 -->
          <div class="bg-white/90 backdrop-blur rounded-xl p-4 mb-4 flex justify-between items-center">
            <div class="text-center">
              <p class="text-xs text-gray-500">点赞数</p>
              <p class="text-xl font-bold text-primary">{{ likes.toLocaleString() }}</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500">连击</p>
              <p class="text-xl font-bold text-orange-500">x{{ combo }}</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500">剩余时间</p>
              <p class="text-xl font-bold" :class="timeLeft <= 10 ? 'text-red-500' : 'text-gray-800'">
                {{ timeLeft }}s
              </p>
            </div>
          </div>

          <!-- 游戏区域 -->
          <div
            class="relative bg-white/10 backdrop-blur rounded-2xl overflow-hidden"
            style="height: 500px;"
            @click="handleMiss"
          >
            <!-- 直播间装饰 -->
            <div class="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🔴 直播中
            </div>

            <!-- 产品 -->
            <TransitionGroup name="product">
              <div
                v-for="product in products"
                :key="product.id"
                class="absolute cursor-pointer transform hover:scale-110 transition-transform select-none"
                :style="{ left: product.x + '%', top: product.y + '%' }"
                @click.stop="collectProduct(product)"
              >
                <img
                  v-if="product.image"
                  :src="product.image"
                  :alt="product.type"
                  class="w-16 h-16 object-contain drop-shadow-lg"
                  :class="{ 'animate-bounce': product.type === 'super' }"
                />
                <div v-else class="text-5xl" :class="{ 'animate-bounce': product.type === 'super' }">
                  {{ product.emoji }}
                </div>
              </div>
            </TransitionGroup>

            <!-- 点击反馈 -->
            <TransitionGroup name="feedback">
              <div
                v-for="feedback in feedbacks"
                :key="feedback.id"
                class="absolute pointer-events-none font-bold text-lg"
                :class="feedback.positive ? 'text-green-400' : 'text-red-400'"
                :style="{ left: feedback.x + '%', top: feedback.y + '%' }"
              >
                {{ feedback.text }}
              </div>
            </TransitionGroup>
          </div>

          <!-- Combo提示 -->
          <Transition name="combo">
            <div
              v-if="showComboHint"
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-yellow-400 pointer-events-none"
              style="text-shadow: 0 0 20px rgba(255,200,0,0.8);"
            >
              {{ comboText }}
            </div>
          </Transition>
        </div>

        <!-- 游戏结束界面 -->
        <div v-else-if="gameState === 'ended'" class="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div class="text-6xl mb-4">{{ finalEmoji }}</div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">直播结束！</h2>

          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 my-6">
            <p class="text-gray-600 mb-2">本次直播获得</p>
            <p class="text-4xl font-bold text-primary mb-2">{{ likes.toLocaleString() }}</p>
            <p class="text-gray-500">点赞</p>
          </div>

          <div class="bg-gray-50 rounded-xl p-4 mb-6">
            <p class="text-sm text-gray-600">
              实践团真实直播记录：<span class="font-bold text-cyan-600">61,000</span> 点赞
            </p>
            <p class="text-sm mt-2" :class="likes >= 61000 ? 'text-green-600 font-bold' : 'text-gray-500'">
              {{ resultMessage }}
            </p>
          </div>

          <div class="flex gap-3">
            <button
              @click="startGame"
              class="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              再来一次
            </button>
            <NuxtLink
              to="/games"
              class="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors text-center"
            >
              返回大厅
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number
  type: 'fish' | 'wine' | 'rice' | 'super' | 'bad'
  image: string | null
  emoji: string | null
  points: number
  x: number
  y: number
}

interface Feedback {
  id: number
  text: string
  x: number
  y: number
  positive: boolean
}

const gameState = ref<'ready' | 'playing' | 'ended'>('ready')
const likes = ref(0)
const combo = ref(1)
const timeLeft = ref(30)
const products = ref<Product[]>([])
const feedbacks = ref<Feedback[]>([])
const showComboHint = ref(false)
const comboText = ref('')

let gameTimer: ReturnType<typeof setInterval> | null = null
let spawnTimer: ReturnType<typeof setInterval> | null = null
let productId = 0
let feedbackId = 0
let lastClickTime = 0

const productTypes = [
  { type: 'fish', image: '/images/game/live/fish.png', emoji: null, points: 100, weight: 40 },
  { type: 'wine', image: '/images/game/live/wine.png', emoji: null, points: 150, weight: 25 },
  { type: 'rice', image: '/images/game/live/rice.png', emoji: null, points: 80, weight: 25 },
  { type: 'super', image: null, emoji: '⭐', points: 500, weight: 5 },
  { type: 'bad', image: null, emoji: '👎', points: -200, weight: 5 },
] as const

const finalEmoji = computed(() => {
  if (likes.value >= 61000) return '🏆'
  if (likes.value >= 30000) return '🎉'
  if (likes.value >= 10000) return '👍'
  return '💪'
})

const resultMessage = computed(() => {
  if (likes.value >= 61000) return '太厉害了！你超越了实践团的记录！'
  if (likes.value >= 30000) return '非常棒！你已经是直播达人了！'
  if (likes.value >= 10000) return '不错的成绩！继续加油！'
  return '初次尝试，再接再厉！'
})

function startGame() {
  gameState.value = 'playing'
  likes.value = 0
  combo.value = 1
  timeLeft.value = 30
  products.value = []
  feedbacks.value = []
  lastClickTime = 0

  // 游戏计时器
  gameTimer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      endGame()
    }
  }, 1000)

  // 产品生成器
  spawnTimer = setInterval(() => {
    spawnProduct()
  }, 800)

  // 初始生成几个产品
  for (let i = 0; i < 3; i++) {
    setTimeout(() => spawnProduct(), i * 200)
  }
}

function spawnProduct() {
  if (gameState.value !== 'playing') return

  // 限制同时存在的产品数量
  if (products.value.length >= 8) {
    // 移除最旧的产品
    products.value.shift()
  }

  // 根据权重随机选择产品类型
  const totalWeight = productTypes.reduce((sum, p) => sum + p.weight, 0)
  let random = Math.random() * totalWeight
  let selectedType = productTypes[0]

  for (const pt of productTypes) {
    random -= pt.weight
    if (random <= 0) {
      selectedType = pt
      break
    }
  }

  const product: Product = {
    id: productId++,
    type: selectedType.type,
    image: selectedType.image,
    emoji: selectedType.emoji,
    points: selectedType.points,
    x: 10 + Math.random() * 75,
    y: 15 + Math.random() * 70,
  }

  products.value.push(product)

  // 产品自动消失
  setTimeout(() => {
    const index = products.value.findIndex(p => p.id === product.id)
    if (index !== -1) {
      products.value.splice(index, 1)
    }
  }, 3000)
}

function collectProduct(product: Product) {
  const index = products.value.findIndex(p => p.id === product.id)
  if (index === -1) return

  products.value.splice(index, 1)

  const now = Date.now()

  // Combo逻辑
  if (product.points > 0) {
    if (now - lastClickTime < 1000) {
      combo.value = Math.min(combo.value + 1, 10)
      if (combo.value >= 3) {
        showComboHint.value = true
        comboText.value = `${combo.value}连击!`
        setTimeout(() => { showComboHint.value = false }, 500)
      }
    } else {
      combo.value = 1
    }
    lastClickTime = now
  } else {
    combo.value = 1
  }

  // 计算得分
  const points = product.points > 0 ? product.points * combo.value : product.points
  likes.value = Math.max(0, likes.value + points)

  // 显示反馈
  const feedback: Feedback = {
    id: feedbackId++,
    text: points > 0 ? `+${points}` : `${points}`,
    x: product.x,
    y: product.y - 5,
    positive: points > 0,
  }
  feedbacks.value.push(feedback)

  setTimeout(() => {
    const idx = feedbacks.value.findIndex(f => f.id === feedback.id)
    if (idx !== -1) {
      feedbacks.value.splice(idx, 1)
    }
  }, 800)
}

function handleMiss() {
  // 点击空白处重置combo
  if (Date.now() - lastClickTime > 500) {
    combo.value = 1
  }
}

function endGame() {
  gameState.value = 'ended'
  if (gameTimer) clearInterval(gameTimer)
  if (spawnTimer) clearInterval(spawnTimer)
  products.value = []
}

onUnmounted(() => {
  if (gameTimer) clearInterval(gameTimer)
  if (spawnTimer) clearInterval(spawnTimer)
})

useHead({
  title: '直播带货达人 - 实践小游戏',
})
</script>

<style scoped>
.product-enter-active {
  transition: all 0.3s ease-out;
}
.product-leave-active {
  transition: all 0.2s ease-in;
}
.product-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.product-leave-to {
  opacity: 0;
  transform: scale(1.5);
}

.feedback-enter-active {
  transition: all 0.3s ease-out;
}
.feedback-leave-active {
  transition: all 0.5s ease-in;
}
.feedback-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.feedback-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.combo-enter-active,
.combo-leave-active {
  transition: all 0.3s ease;
}
.combo-enter-from,
.combo-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
}
</style>
