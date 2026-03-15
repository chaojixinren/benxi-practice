<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0">
      <img src="/images/game/fish/bg.jpg" alt="背景" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-900/60 to-teal-900/70"></div>
    </div>

    <main class="flex-grow flex items-center justify-center p-4 relative z-10">
      <div class="w-full max-w-2xl">
        <!-- 游戏开始界面 -->
        <div v-if="gameState === 'ready'" class="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 text-center">
          <div class="text-6xl mb-4 animate-bounce">🐟</div>
          <h1 class="text-2xl font-bold text-gray-800 mb-2">细鳞鱼养成</h1>
          <p class="text-gray-600 mb-6">
            将一条细鳞鱼从鱼卵养成成鱼！
          </p>

          <div class="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-4 mb-6 text-left">
            <h3 class="font-bold text-gray-700 mb-2">成长阶段：</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-center gap-2">
                <img src="/images/game/fish/鱼卵.png" alt="鱼卵" class="w-8 h-8 object-contain" />
                <span>鱼卵 → 成长值100%孵化成鱼苗</span>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/game/fish/鱼苗.png" alt="鱼苗" class="w-8 h-8 object-contain" />
                <span>鱼苗 → 成长值100%长成成鱼</span>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/game/fish/成鱼.png" alt="成鱼" class="w-8 h-8 object-contain" />
                <span>成鱼 → 成长值100%完成养成！</span>
              </li>
            </ul>
            <h3 class="font-bold text-gray-700 mt-4 mb-2">操作说明：</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-center gap-2">
                <span class="text-xl">🍖</span>
                <span>喂食 - 恢复生命值</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-xl">💫</span>
                <span>互动 - 提升心情，大幅增加成长</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-xl">👆</span>
                <span>点击鱼 - 获得额外成长奖励</span>
              </li>
            </ul>
            <div class="mt-3 p-2 bg-yellow-50 rounded-lg text-xs text-yellow-700">
              💡 多互动可以更快成长！养成成功可获得细鳞鱼购买优惠券！
            </div>
          </div>

          <button
            @click="startGame"
            class="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-teal-700 transition-all shadow-lg"
          >
            开始养成
          </button>

          <NuxtLink to="/games" class="inline-block mt-4 text-gray-500 hover:text-gray-700 transition-colors">
            ← 返回游戏大厅
          </NuxtLink>
        </div>

        <!-- 游戏进行界面 -->
        <div v-else-if="gameState === 'playing'" class="relative">
          <!-- 顶部状态栏 -->
          <div class="bg-white/95 backdrop-blur rounded-xl p-4 mb-4 shadow-lg">
            <div class="flex justify-between items-center mb-3">
              <div class="text-center px-3 py-1 rounded-lg" :class="stageBgClass">
                <p class="text-xs text-gray-500">阶段</p>
                <p class="text-lg font-bold" :class="stageColor">{{ stageName }}</p>
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-500">剩余时间</p>
                <p class="text-2xl font-bold font-mono" :class="timeLeft <= 30 ? 'text-red-500 animate-pulse' : 'text-gray-800'">
                  {{ formatTime }}
                </p>
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-500">心情</p>
                <p class="text-2xl">{{ moodEmoji }}</p>
              </div>
            </div>

            <!-- 生命值条 -->
            <div class="mb-3">
              <div class="flex justify-between text-xs mb-1">
                <span class="text-gray-600 font-medium">❤️ 生命值</span>
                <span class="font-bold" :class="health <= 30 ? 'text-red-500' : 'text-gray-700'">{{ Math.floor(health) }}%</span>
              </div>
              <div class="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div
                  class="h-full transition-all duration-500 rounded-full relative overflow-hidden"
                  :class="healthBarColor"
                  :style="{ width: health + '%' }"
                >
                  <div class="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                </div>
              </div>
            </div>

            <!-- 成长值条 -->
            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-gray-600 font-medium">📈 成长值</span>
                <span class="font-bold text-teal-600">{{ Math.floor(growth) }}%</span>
              </div>
              <div class="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div
                  class="h-full bg-gradient-to-r from-cyan-400 to-teal-500 transition-all duration-500 rounded-full relative overflow-hidden"
                  :style="{ width: growth + '%' }"
                >
                  <div class="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 鱼缸区域 -->
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl"
            style="height: 380px;"
          >
            <!-- 水族箱背景 -->
            <div class="absolute inset-0 bg-gradient-to-b from-cyan-300/40 via-blue-400/50 to-blue-600/60"></div>

            <!-- 水波纹效果 -->
            <div class="water-surface"></div>

            <!-- 气泡效果 -->
            <div class="bubbles">
              <div v-for="i in 10" :key="i" class="bubble" :style="bubbleStyle(i)"></div>
            </div>

            <!-- 水草装饰 -->
            <div class="absolute bottom-0 left-4 text-4xl opacity-60">🌿</div>
            <div class="absolute bottom-0 left-12 text-3xl opacity-50">🌱</div>
            <div class="absolute bottom-0 right-8 text-4xl opacity-60">🌿</div>
            <div class="absolute bottom-0 right-16 text-3xl opacity-50">🌱</div>

            <!-- 鱼的显示 -->
            <div
              class="fish-container absolute cursor-pointer"
              :style="fishStyle"
              @click="clickFish"
            >
              <!-- 成鱼显示图片 -->
              <img
                v-if="currentStage === 'adult'"
                src="/images/game/fish/成鱼.png"
                alt="细鳞鱼"
                class="w-32 h-32 object-contain transition-transform duration-200 hover:scale-125 active:scale-90 select-none drop-shadow-lg"
                :class="{ 'animate-wiggle': isWiggling }"
              />
              <!-- 鱼苗显示图片 -->
              <img
                v-else-if="currentStage === 'fry'"
                src="/images/game/fish/鱼苗.png"
                alt="鱼苗"
                class="w-28 h-28 object-contain transition-transform duration-200 hover:scale-125 active:scale-90 select-none drop-shadow-lg"
                :class="{ 'animate-wiggle': isWiggling }"
              />
              <!-- 鱼卵显示图片 -->
              <img
                v-else
                src="/images/game/fish/鱼卵.png"
                alt="鱼卵"
                class="w-24 h-24 object-contain transition-transform duration-200 hover:scale-125 active:scale-90 select-none drop-shadow-lg"
                :class="{ 'animate-wiggle': isWiggling }"
              />
              <!-- 成长光效 -->
              <div v-if="growth >= 80" class="absolute inset-0 animate-ping opacity-30 text-7xl">
                ✨
              </div>
            </div>

            <!-- 互动反馈动画 -->
            <TransitionGroup name="float-up">
              <div
                v-for="fb in floatingFeedbacks"
                :key="fb.id"
                class="absolute pointer-events-none font-bold text-xl animate-float"
                :style="{ left: fb.x + '%', top: fb.y + '%' }"
              >
                <span :class="fb.color">{{ fb.text }}</span>
              </div>
            </TransitionGroup>

            <!-- 底部提示 -->
            <div
              v-if="currentStage === 'egg'"
              class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white/80 bg-black/20 px-4 py-1 rounded-full"
            >
              👆 点击鱼卵保持温度
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="flex gap-4 mt-4">
            <button
              @click="feed"
              :disabled="feedCooldown > 0"
              class="flex-1 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              :class="feedCooldown > 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-orange-400 to-red-500 text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'"
            >
              <span class="text-2xl">🍖</span>
              <span>喂食 {{ feedCooldown > 0 ? `(${feedCooldown}s)` : '' }}</span>
            </button>
            <button
              @click="interact"
              :disabled="interactCooldown > 0"
              class="flex-1 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              :class="interactCooldown > 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'"
            >
              <span class="text-2xl">💫</span>
              <span>互动 {{ interactCooldown > 0 ? `(${interactCooldown}s)` : '' }}</span>
            </button>
          </div>

          <!-- 提示信息 -->
          <Transition name="hint">
            <div
              v-if="showHint"
              class="mt-3 text-center text-sm py-2 px-4 rounded-lg"
              :class="hintType === 'warning' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'"
            >
              {{ hintMessage }}
            </div>
          </Transition>
        </div>

        <!-- 游戏结束界面 -->
        <div v-else-if="gameState === 'ended'" class="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 text-center">
          <div class="text-7xl mb-4" :class="isSuccess ? 'animate-bounce' : 'animate-pulse'">{{ endEmoji }}</div>
          <h2 class="text-2xl font-bold mb-2" :class="isSuccess ? 'text-teal-600' : 'text-gray-800'">{{ endTitle }}</h2>

          <div class="rounded-xl p-6 my-6" :class="isSuccess ? 'bg-gradient-to-r from-cyan-50 to-teal-50' : 'bg-gray-50'">
            <p v-if="!isSuccess" class="text-gray-600">{{ endMessage }}</p>
            <p v-if="isSuccess" class="text-xl font-bold text-teal-600">
              🎊 恭喜养成细鳞鱼！
            </p>
          </div>

          <!-- 优惠券奖励 -->
          <div v-if="isSuccess" class="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-dashed border-amber-300 relative overflow-hidden">
            <div class="absolute top-0 left-0 bg-amber-400 text-white text-xs px-3 py-1 rounded-br-lg font-bold">
              🎁 奖励
            </div>
            <div class="mt-4">
              <p class="text-2xl font-bold text-amber-600 mb-2">🐟 细鳞鱼购买优惠券</p>
              <p class="text-4xl font-bold text-red-500 mb-2">8.5折</p>
              <p class="text-sm text-gray-500 mb-3">购买细鳞鱼产品时可使用</p>
              <div class="bg-white rounded-lg p-3 border border-amber-200">
                <p class="text-xs text-gray-500 mb-1">兑换码</p>
                <p class="text-xl font-mono font-bold text-amber-600 tracking-widest">{{ redeemCode }}</p>
              </div>
            </div>
            <div class="mt-3 flex justify-center gap-2">
              <span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">限量优惠</span>
              <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">养成专属</span>
            </div>
          </div>

          <div class="flex gap-3">
            <button
              @click="startGame"
              class="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-xl font-bold hover:from-cyan-600 hover:to-teal-700 transition-all hover:shadow-lg"
            >
              🔄 再来一次
            </button>
            <NuxtLink
              to="/games"
              class="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors text-center"
            >
              🏠 返回大厅
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
type Stage = 'egg' | 'fry' | 'adult'

interface FloatingFeedback {
  id: number
  text: string
  x: number
  y: number
  color: string
}

const gameState = ref<'ready' | 'playing' | 'ended'>('ready')
const health = ref(100)
const growth = ref(0)
const timeLeft = ref(180)
const currentStage = ref<Stage>('egg')
const mood = ref(100)
const feedCooldown = ref(0)
const interactCooldown = ref(0)
const isWiggling = ref(false)
const showHint = ref(false)
const hintMessage = ref('')
const hintType = ref<'warning' | 'success'>('success')
const redeemCode = ref('')

// 统计数据
const totalFeeds = ref(0)
const totalInteracts = ref(0)

// 鱼的位置
const fishX = ref(50)
const fishY = ref(50)
const fishDirection = ref(1)

// 浮动反馈
const floatingFeedbacks = ref<FloatingFeedback[]>([])
let feedbackId = 0

let gameTimer: ReturnType<typeof setInterval> | null = null
let healthTimer: ReturnType<typeof setInterval> | null = null
let growthTimer: ReturnType<typeof setInterval> | null = null
let moveTimer: ReturnType<typeof setInterval> | null = null
let cooldownTimer: ReturnType<typeof setInterval> | null = null

// 计算属性
const stageName = computed(() => {
  switch (currentStage.value) {
    case 'egg': return '鱼卵'
    case 'fry': return '鱼苗'
    case 'adult': return '成鱼'
  }
})

const stageColor = computed(() => {
  switch (currentStage.value) {
    case 'egg': return 'text-amber-600'
    case 'fry': return 'text-cyan-600'
    case 'adult': return 'text-teal-600'
  }
})

const stageBgClass = computed(() => {
  switch (currentStage.value) {
    case 'egg': return 'bg-amber-50'
    case 'fry': return 'bg-cyan-50'
    case 'adult': return 'bg-teal-50'
  }
})

const fishEmoji = computed(() => {
  switch (currentStage.value) {
    case 'egg': return '🥚'
    case 'fry': return '🐣'
    case 'adult': return '🐟'
  }
})

const moodEmoji = computed(() => {
  if (mood.value >= 80) return '😊'
  if (mood.value >= 50) return '😐'
  if (mood.value >= 30) return '😔'
  return '😢'
})

const healthBarColor = computed(() => {
  if (health.value >= 60) return 'bg-gradient-to-r from-green-400 to-emerald-500'
  if (health.value >= 30) return 'bg-gradient-to-r from-yellow-400 to-orange-500'
  return 'bg-gradient-to-r from-red-400 to-red-600'
})

const formatTime = computed(() => {
  const mins = Math.floor(timeLeft.value / 60)
  const secs = timeLeft.value % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
})

const fishStyle = computed(() => {
  return {
    left: fishX.value + '%',
    top: fishY.value + '%',
    transform: `translate(-50%, -50%) scaleX(${-fishDirection.value})`
  }
})

const isSuccess = computed(() => currentStage.value === 'adult' && growth.value >= 100)

const endEmoji = computed(() => isSuccess.value ? '🎉' : '😢')
const endTitle = computed(() => isSuccess.value ? '养成成功！' : '养成失败...')
const endMessage = computed(() => {
  if (isSuccess.value) return '太棒了！你成功将细鳞鱼从鱼卵养成成鱼！'
  if (health.value <= 0) return '生命值耗尽，细鳞鱼离开了...'
  return '时间到了，但鱼还没有完全长大...'
})

const finalStage = computed(() => stageName.value)

// 气泡样式
function bubbleStyle(index: number) {
  return {
    left: (5 + index * 10) + '%',
    animationDelay: (index * 0.7) + 's',
    animationDuration: (3 + Math.random() * 2) + 's'
  }
}

// 显示提示
function showHintMessage(message: string, type: 'warning' | 'success' = 'success') {
  hintMessage.value = message
  hintType.value = type
  showHint.value = true
  setTimeout(() => { showHint.value = false }, 2000)
}

// 添加浮动反馈
function addFloatingFeedback(text: string, x: number, y: number, color: string) {
  const fb: FloatingFeedback = {
    id: feedbackId++,
    text,
    x: Math.max(10, Math.min(80, x)),
    y: Math.max(10, Math.min(80, y)),
    color
  }
  floatingFeedbacks.value.push(fb)
  setTimeout(() => {
    const idx = floatingFeedbacks.value.findIndex(f => f.id === fb.id)
    if (idx !== -1) floatingFeedbacks.value.splice(idx, 1)
  }, 1500)
}

// 游戏逻辑
function startGame() {
  gameState.value = 'playing'
  health.value = 100
  growth.value = 0
  timeLeft.value = 180
  currentStage.value = 'egg'
  mood.value = 100
  feedCooldown.value = 0
  interactCooldown.value = 0
  totalFeeds.value = 0
  totalInteracts.value = 0
  fishX.value = 50
  fishY.value = 50
  floatingFeedbacks.value = []

  // 游戏主计时器
  gameTimer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      endGame()
    }
  }, 1000)

  // 生命值下降计时器
  healthTimer = setInterval(() => {
    const decreaseRate = currentStage.value === 'egg' ? 1 : 2
    health.value = Math.max(0, health.value - decreaseRate)
    mood.value = Math.max(0, mood.value - 0.8)

    // 低生命值警告
    if (health.value <= 30 && health.value > 0 && Math.floor(health.value) % 10 === 0) {
      showHintMessage('⚠️ 生命值过低，快喂食！', 'warning')
    }

    if (health.value <= 0) {
      endGame()
    }
  }, 500)

  // 成长计时器
  growthTimer = setInterval(() => {
    if (growth.value < 100) {
      // 基础成长 + 心情加成 + 阶段加成
      const stageBonus = currentStage.value === 'egg' ? 1 : currentStage.value === 'fry' ? 1.2 : 1.5
      const growthRate = 1.2 + (mood.value / 100) * 1.2 * stageBonus
      growth.value = Math.min(100, growth.value + growthRate)
    } else {
      // 成长值满，进入下一阶段
      evolveToNextStage()
    }
  }, 500)

  // 鱼移动计时器
  moveTimer = setInterval(() => {
    moveFish()
  }, 2500)

  // 冷却计时器
  cooldownTimer = setInterval(() => {
    if (feedCooldown.value > 0) feedCooldown.value--
    if (interactCooldown.value > 0) interactCooldown.value--
  }, 1000)
}

function moveFish() {
  if (currentStage.value === 'egg') return

  const newX = 15 + Math.random() * 70
  const newY = 20 + Math.random() * 60

  fishDirection.value = newX > fishX.value ? 1 : -1
  fishX.value = newX
  fishY.value = newY
}

function feed() {
  if (feedCooldown.value > 0) return

  const healAmount = currentStage.value === 'egg' ? 15 : 25
  health.value = Math.min(100, health.value + healAmount)
  mood.value = Math.min(100, mood.value + 5)
  feedCooldown.value = 3
  totalFeeds.value++

  addFloatingFeedback(`+${healAmount}❤️`, fishX.value, fishY.value - 10, 'text-green-400')
}

function interact() {
  if (interactCooldown.value > 0) return

  const moodBoost = 20
  const growthBoost = 8

  mood.value = Math.min(100, mood.value + moodBoost)
  growth.value = Math.min(100, growth.value + growthBoost)
  interactCooldown.value = 2
  totalInteracts.value++

  // 鱼扭动动画
  isWiggling.value = true
  setTimeout(() => { isWiggling.value = false }, 500)

  addFloatingFeedback(`心情↑`, fishX.value, fishY.value - 10, 'text-pink-400')
  addFloatingFeedback(`+${growthBoost}📈`, fishX.value + 5, fishY.value - 5, 'text-teal-400')
}

function clickFish() {
  // 直接点击鱼获得奖励
  if (interactCooldown.value > 0 && feedCooldown.value > 0) {
    // 冷却中的小奖励
    growth.value = Math.min(100, growth.value + 1)
    addFloatingFeedback('+1📈', fishX.value, fishY.value - 10, 'text-teal-400')
  }

  // 鱼扭动
  isWiggling.value = true
  setTimeout(() => { isWiggling.value = false }, 300)
}

function evolveToNextStage() {
  if (currentStage.value === 'egg') {
    currentStage.value = 'fry'
    growth.value = 0
    showHintMessage('🎉 鱼卵孵化成鱼苗了！', 'success')
    // 进化奖励
    health.value = Math.min(100, health.value + 20)
    addFloatingFeedback('+20❤️', fishX.value, fishY.value - 15, 'text-green-400')
  } else if (currentStage.value === 'fry') {
    currentStage.value = 'adult'
    growth.value = 0
    showHintMessage('🎉 鱼苗长成成鱼了！', 'success')
    health.value = Math.min(100, health.value + 30)
    addFloatingFeedback('+30❤️', fishX.value, fishY.value - 15, 'text-green-400')
  } else if (currentStage.value === 'adult' && growth.value >= 100) {
    // 成鱼养成完成
    endGame()
  }
}

function endGame() {
  gameState.value = 'ended'

  // 生成兑换码
  redeemCode.value = generateRedeemCode()

  if (gameTimer) clearInterval(gameTimer)
  if (healthTimer) clearInterval(healthTimer)
  if (growthTimer) clearInterval(growthTimer)
  if (moveTimer) clearInterval(moveTimer)
  if (cooldownTimer) clearInterval(cooldownTimer)
}

// 生成随机兑换码
function generateRedeemCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// 监听时间，时间不足时提示
watch(timeLeft, (newVal) => {
  // 时间警告
  if (newVal === 30) {
    showHintMessage('⏰ 只剩30秒了，加油！', 'warning')
  }

  // 时间快到了，强制进化（保底机制）
  if (newVal === 1 && currentStage.value !== 'adult') {
    // 强制进入下一阶段
    if (currentStage.value === 'egg') {
      currentStage.value = 'fry'
      growth.value = 0
    } else if (currentStage.value === 'fry') {
      currentStage.value = 'adult'
      growth.value = 0
    }
  }
})

onUnmounted(() => {
  if (gameTimer) clearInterval(gameTimer)
  if (healthTimer) clearInterval(healthTimer)
  if (growthTimer) clearInterval(growthTimer)
  if (moveTimer) clearInterval(moveTimer)
  if (cooldownTimer) clearInterval(cooldownTimer)
})

useHead({
  title: '细鳞鱼养成 - 实践小游戏',
})
</script>

<style scoped>
/* 水面效果 */
.water-surface {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%);
  animation: waterMove 3s ease-in-out infinite;
}

@keyframes waterMove {
  0%, 100% { transform: translateY(0); opacity: 0.3; }
  50% { transform: translateY(-5px); opacity: 0.5; }
}

/* 气泡效果 */
.bubbles {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.bubble {
  position: absolute;
  bottom: -20px;
  width: 12px;
  height: 12px;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
  border-radius: 50%;
  animation: rise 4s infinite ease-in;
}

@keyframes rise {
  0% { bottom: -20px; opacity: 0; transform: scale(0.5); }
  10% { opacity: 0.6; }
  100% { bottom: 100%; opacity: 0; transform: scale(1) translateX(30px); }
}

/* 鱼游动动画 */
.fish-container {
  transition: left 2.5s ease-in-out, top 2.5s ease-in-out;
}

/* 鱼扭动 */
.animate-wiggle {
  animation: wiggle 0.15s ease-in-out 3;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

/* 浮动反馈动画 */
.float-up-enter-active {
  animation: floatUp 1.5s ease-out forwards;
}

.float-up-leave-active {
  transition: opacity 0.3s;
}

.float-up-leave-to {
  opacity: 0;
}

@keyframes floatUp {
  0% { opacity: 0; transform: translateY(20px) scale(0.8); }
  20% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-60px) scale(1.1); }
}

/* 提示动画 */
.hint-enter-active,
.hint-leave-active {
  transition: all 0.3s ease;
}

.hint-enter-from,
.hint-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 浮动文字动画 */
.animate-float {
  animation: floatText 1.5s ease-out forwards;
}

@keyframes floatText {
  0% { opacity: 0; transform: translateY(0); }
  20% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-50px); }
}
</style>