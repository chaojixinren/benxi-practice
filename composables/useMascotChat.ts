export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

// 吉祥物角色定义
export interface MascotCharacter {
  id: string
  name: string
  image: string
  welcomeMessage: string
  personality: string
}

// 两个吉祥物角色
export const MASCOT_CHARACTERS: MascotCharacter[] = [
  {
    id: 'youmi',
    name: '优米',
    image: '/images/优米.png',
    welcomeMessage: '你好呀！我是优米，一只来自本溪的小精灵~ 🌟\n\n我对本溪的工业历史和红色文化特别了解！想知道"中国第一铁"的故事吗？或者《义勇军进行曲》的诞生地？问我吧！',
    personality: '优米是一个活泼可爱、知识渊博的小精灵形象。性格开朗热情，特别擅长讲解工业历史和红色文化。说话风格活泼俏皮，喜欢用生动的比喻和小故事来解释复杂的历史知识。'
  },
  {
    id: 'yuxiaoyi',
    name: '渔小绎',
    image: '/images/渔小绎.png',
    welcomeMessage: '嗨～我是渔小绎，桓仁山水间的小向导！🐟\n\n我最熟悉细鳞鱼、冰葡萄酒和非遗手艺啦！想听直播助农6.1万点赞的故事？还是想了解版画草编？快来问我～',
    personality: '渔小绎是一个清新自然、温柔亲切的小鱼形象。性格温和友善，特别擅长介绍生态农业、特色产业和非遗文化。说话风格温暖治愈，喜欢分享有趣的乡村故事和美食体验。'
  }
]

export function useMascotChat() {
  // 聊天状态
  const messages = ref<ChatMessage[]>([])
  const isLoading = ref(false)
  const isOpen = ref(false)

  // 当前吉祥物角色
  const currentCharacter = ref<MascotCharacter>(MASCOT_CHARACTERS[0])
  const mascotImage = computed(() => currentCharacter.value.image)
  const mascotName = computed(() => currentCharacter.value.name)

  // 初始化时随机选择角色
  const initMascot = () => {
    const randomIndex = Math.floor(Math.random() * MASCOT_CHARACTERS.length)
    currentCharacter.value = MASCOT_CHARACTERS[randomIndex]
  }

  // 添加欢迎消息
  const addWelcomeMessage = () => {
    if (messages.value.length === 0) {
      messages.value.push({
        id: 'welcome',
        role: 'assistant',
        content: currentCharacter.value.welcomeMessage,
        timestamp: new Date()
      })
    }
  }

  // 发送消息
  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading.value) return

    // 添加用户消息
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    }
    messages.value.push(userMessage)

    isLoading.value = true

    try {
      // 准备历史消息（排除欢迎消息）
      const history = messages.value
        .filter(m => m.id !== 'welcome')
        .slice(0, -1) // 排除刚添加的用户消息
        .map(m => ({
          role: m.role as 'user' | 'assistant',
          content: m.content
        }))

      const response = await $fetch<{ success: boolean; message: string }>('/api/chat', {
        method: 'POST',
        body: {
          message: content.trim(),
          history,
          characterId: currentCharacter.value.id
        }
      })

      // 添加助手回复
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.message,
        timestamp: new Date()
      }
      messages.value.push(assistantMessage)
    } catch (error) {
      // 添加错误提示
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: '网络好像有点问题，请稍后再试~ 你可以先浏览网站其他页面哦！',
        timestamp: new Date()
      }
      messages.value.push(errorMessage)
    } finally {
      isLoading.value = false
    }
  }

  // 切换对话框
  const toggleChat = () => {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      addWelcomeMessage()
    }
  }

  // 清空历史
  const clearHistory = () => {
    messages.value = []
    addWelcomeMessage()
  }

  return {
    messages,
    isLoading,
    isOpen,
    mascotImage,
    mascotName,
    currentCharacter,
    initMascot,
    sendMessage,
    toggleChat,
    clearHistory
  }
}
