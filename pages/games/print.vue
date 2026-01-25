<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- 背景图片 -->
    <div class="absolute inset-0">
      <img src="/images/game/print/bg.jpg" alt="背景" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-purple-900/80"></div>
    </div>

    <main class="flex-grow flex items-center justify-center p-4 relative z-10">
      <div class="w-full max-w-3xl">
        <!-- 游戏开始界面 -->
        <div v-if="gameState === 'ready'" class="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <h1 class="text-2xl font-bold text-gray-800 mb-2">版画印刷工坊</h1>
          <p class="text-gray-600 mb-6">
            体验传统版画制作！<br>
            观察左侧目标图案，在右侧画布上点击格子进行"雕刻"，复刻出相同的图案。
          </p>

          <div class="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <h3 class="font-bold text-gray-700 mb-2">游戏规则：</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>🔲 点击格子可以切换雕刻状态</li>
              <li>🎯 让你的画布与目标图案完全一致</li>
              <li>⭐ 步数越少，分数越高</li>
              <li>📈 共3关，难度递增</li>
            </ul>
          </div>

          <button
            @click="startGame"
            class="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg"
          >
            开始雕刻
          </button>

          <NuxtLink to="/games" class="inline-block mt-4 text-gray-500 hover:text-gray-700 transition-colors">
            返回游戏大厅
          </NuxtLink>
        </div>

        <!-- 游戏进行界面 -->
        <div v-else-if="gameState === 'playing'" class="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">
          <!-- 顶部状态栏 -->
          <div class="flex justify-between items-center mb-6">
            <div class="text-center">
              <p class="text-xs text-gray-500">关卡</p>
              <p class="text-xl font-bold text-purple-600">{{ currentLevel }} / 3</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500">步数</p>
              <p class="text-xl font-bold text-indigo-600">{{ steps }}</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500">总分</p>
              <p class="text-xl font-bold text-amber-600">{{ totalScore }}</p>
            </div>
          </div>

          <!-- 关卡标题 -->
          <div class="text-center mb-4">
            <h3 class="text-lg font-bold text-gray-700">{{ levelNames[currentLevel - 1] }}</h3>
          </div>

          <!-- 游戏区域 -->
          <div class="flex justify-center gap-6 md:gap-10">
            <!-- 目标图案 -->
            <div class="text-center">
              <p class="text-sm text-gray-500 mb-2">目标图案</p>
              <div
                class="grid gap-1 p-2 bg-amber-50 rounded-lg border-2 border-amber-200"
                :style="{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }"
              >
                <div
                  v-for="(cell, index) in targetPattern"
                  :key="'target-' + index"
                  class="w-10 h-10 md:w-12 md:h-12 rounded transition-colors"
                  :class="cell ? 'bg-gray-800' : 'bg-amber-100'"
                />
              </div>
            </div>

            <!-- 玩家画布 -->
            <div class="text-center">
              <p class="text-sm text-gray-500 mb-2">你的画布</p>
              <div
                class="grid gap-1 p-2 bg-gray-50 rounded-lg border-2 border-gray-200"
                :style="{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }"
              >
                <button
                  v-for="(cell, index) in playerPattern"
                  :key="'player-' + index"
                  class="w-10 h-10 md:w-12 md:h-12 rounded transition-all hover:scale-105"
                  :class="[
                    cell ? 'bg-purple-700 hover:bg-purple-600' : 'bg-gray-200 hover:bg-gray-300',
                    isCorrect(index) ? '' : 'ring-2 ring-red-400'
                  ]"
                  @click="toggleCell(index)"
                />
              </div>
            </div>
          </div>

          <!-- 匹配进度 -->
          <div class="mt-6">
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>匹配度</span>
              <span>{{ matchPercentage }}%</span>
            </div>
            <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
                :style="{ width: matchPercentage + '%' }"
              />
            </div>
          </div>

          <!-- 完成提示 -->
          <Transition name="fade">
            <div
              v-if="isLevelComplete"
              class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center"
            >
              <p class="text-green-700 font-bold mb-2">🎉 图案匹配成功！</p>
              <p class="text-sm text-green-600 mb-3">本关得分：{{ levelScore }} 分</p>
              <button
                @click="nextLevel"
                class="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                {{ currentLevel < 3 ? '下一关' : '查看成绩' }}
              </button>
            </div>
          </Transition>

          <!-- 重置按钮 -->
          <div class="mt-4 flex justify-center gap-3">
            <button
              @click="resetCanvas"
              class="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors"
            >
              重置画布
            </button>
            <button
              @click="gameState = 'ready'"
              class="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors"
            >
              退出游戏
            </button>
          </div>
        </div>

        <!-- 游戏结束界面 -->
        <div v-else-if="gameState === 'ended'" class="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div class="text-6xl mb-4">🏆</div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">版画完成！</h2>

          <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 my-6">
            <p class="text-gray-600 mb-2">总得分</p>
            <p class="text-4xl font-bold text-purple-600 mb-2">{{ totalScore }}</p>
            <p class="text-gray-500">分</p>
          </div>

          <div class="bg-gray-50 rounded-xl p-4 mb-6">
            <p class="text-sm text-gray-600 mb-2">评价</p>
            <p class="text-lg font-bold" :class="scoreRatingColor">{{ scoreRating }}</p>
          </div>

          <!-- 作品展示 -->
          <div class="mb-6">
            <p class="text-sm text-gray-500 mb-2">你的版画作品集</p>
            <div class="flex justify-center gap-4">
              <div
                v-for="(pattern, idx) in completedPatterns"
                :key="idx"
                class="p-2 bg-amber-50 rounded-lg"
              >
                <div
                  class="grid gap-0.5"
                  :style="{ gridTemplateColumns: `repeat(${getLevelGridSize(idx + 1)}, minmax(0, 1fr))` }"
                >
                  <div
                    v-for="(cell, cellIdx) in pattern"
                    :key="cellIdx"
                    class="w-3 h-3 rounded-sm"
                    :class="cell ? 'bg-gray-800' : 'bg-amber-100'"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            <button
              @click="startGame"
              class="flex-1 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold hover:from-purple-600 hover:to-indigo-700 transition-all"
            >
              再玩一次
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
const gameState = ref<'ready' | 'playing' | 'ended'>('ready')
const currentLevel = ref(1)
const steps = ref(0)
const totalScore = ref(0)
const targetPattern = ref<boolean[]>([])
const playerPattern = ref<boolean[]>([])
const completedPatterns = ref<boolean[][]>([])

const levelNames = ['简单 - 圆形', '中等 - 菱形', '困难 - 窗花']

// 预设的图案 (1表示需要雕刻的格子)
const patterns = {
  // 关卡1: 4x4 圆形
  1: {
    size: 4,
    pattern: [
      0, 1, 1, 0,
      1, 1, 1, 1,
      1, 1, 1, 1,
      0, 1, 1, 0,
    ]
  },
  // 关卡2: 5x5 菱形
  2: {
    size: 5,
    pattern: [
      0, 0, 1, 0, 0,
      0, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
      0, 1, 1, 1, 0,
      0, 0, 1, 0, 0,
    ]
  },
  // 关卡3: 5x5 窗花
  3: {
    size: 5,
    pattern: [
      1, 0, 1, 0, 1,
      0, 1, 1, 1, 0,
      1, 1, 0, 1, 1,
      0, 1, 1, 1, 0,
      1, 0, 1, 0, 1,
    ]
  }
} as const

const gridSize = computed(() => patterns[currentLevel.value as keyof typeof patterns].size)

const matchPercentage = computed(() => {
  if (targetPattern.value.length === 0) return 0
  let correct = 0
  for (let i = 0; i < targetPattern.value.length; i++) {
    if (targetPattern.value[i] === playerPattern.value[i]) correct++
  }
  return Math.round((correct / targetPattern.value.length) * 100)
})

const isLevelComplete = computed(() => matchPercentage.value === 100)

const levelScore = computed(() => {
  // 基础分 + 步数奖励
  const baseScore = 1000
  const stepPenalty = steps.value * 10
  return Math.max(100, baseScore - stepPenalty)
})

const scoreRating = computed(() => {
  if (totalScore.value >= 2700) return '版画大师！'
  if (totalScore.value >= 2400) return '优秀工匠！'
  if (totalScore.value >= 2000) return '熟练学徒！'
  return '初学者，继续加油！'
})

const scoreRatingColor = computed(() => {
  if (totalScore.value >= 2700) return 'text-amber-500'
  if (totalScore.value >= 2400) return 'text-purple-600'
  if (totalScore.value >= 2000) return 'text-indigo-600'
  return 'text-gray-600'
})

function getLevelGridSize(level: number): number {
  return patterns[level as keyof typeof patterns].size
}

function isCorrect(index: number): boolean {
  return targetPattern.value[index] === playerPattern.value[index]
}

function startGame() {
  gameState.value = 'playing'
  currentLevel.value = 1
  totalScore.value = 0
  completedPatterns.value = []
  loadLevel()
}

function loadLevel() {
  const levelData = patterns[currentLevel.value as keyof typeof patterns]
  targetPattern.value = levelData.pattern.map(v => v === 1)
  playerPattern.value = new Array(levelData.pattern.length).fill(false)
  steps.value = 0
}

function toggleCell(index: number) {
  if (isLevelComplete.value) return
  playerPattern.value[index] = !playerPattern.value[index]
  steps.value++
}

function resetCanvas() {
  playerPattern.value = new Array(targetPattern.value.length).fill(false)
  steps.value = 0
}

function nextLevel() {
  // 保存当前完成的图案
  completedPatterns.value.push([...playerPattern.value])
  totalScore.value += levelScore.value

  if (currentLevel.value < 3) {
    currentLevel.value++
    loadLevel()
  } else {
    gameState.value = 'ended'
  }
}

useHead({
  title: '版画印刷工坊 - 实践小游戏',
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
