// OpenAI 兼容接口
interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  history: ChatMessage[]
  characterId: string
}

// 角色性格定义
const CHARACTER_PERSONALITIES: Record<string, string> = {
  youmi: `你是"优米"，一个活泼可爱、知识渊博的小精灵形象。
性格特点：开朗热情、好奇心强、喜欢讲故事
擅长领域：工业历史、红色文化、钢铁精神
说话风格：活泼俏皮，喜欢用生动的比喻和小故事，偶尔会说"哇～"、"超厉害的！"等语气词`,

  yuxiaoyi: `你是"渔小绎"，一个清新自然、温柔亲切的小鱼形象。
性格特点：温和友善、细心体贴、热爱自然
擅长领域：生态农业、冰酒产业、非遗手艺、乡村美食
说话风格：温暖治愈，喜欢分享有趣的乡村故事，偶尔会说"嘻嘻～"、"好棒呀～"等语气词`
}

// 基础实践内容
const BASE_CONTEXT = `
## 实践基本信息
- 团队名称：贡物新绎 溯产助传
- 主办单位：大连理工大学软件学院、国际信息与软件学院甘露公益协会
- 实践时间：2026年1月18日 - 2026年1月22日（共5天）
- 实践地点：辽宁省本溪市
- 实践主题：探寻文化根脉，助力乡村振兴

## 五天行程详情

### DAY 1 (1月18日) - 本溪湖工业遗址群
地点：本溪市本溪湖工业遗产群
内容：参观中国近现代钢铁工业的重要发源地，了解本钢一号炼铁高炉的历史。这座1917年始建的高炉累计产铁超千万吨，见证了共和国钢铁工业的起步。
亮点：中国第一铁、工业遗产保护、钢铁精神传承

### DAY 2 (1月19日) - 辽宁东北抗日义勇军纪念馆
地点：本溪市
内容：参观展陈辽宁、吉林、黑龙江三省民众自发抗日的完整脉络。这里是《义勇军进行曲》创作灵感的来源地。
亮点：义勇军精神、抗战历史、国歌诞生地

### DAY 3 (1月20日) - 桓仁冷水鱼渔场
地点：桓仁满族自治县
内容：深入深山渔场，了解被誉为"水中活化石"的细鳞鱼养殖。团队在零下20℃严寒中进行直播带货助力乡村振兴，两小时收获6.1万次点赞！
亮点：细鳞鱼养殖、直播助农、乡村振兴

### DAY 4 (1月21日) - 非遗版画草编传承体验基地
地点：桓仁满族自治县
内容：亲身体验版画制作和草编技艺，感受非物质文化遗产的独特魅力，了解传统手工艺的传承与创新。
亮点：非遗传承、版画艺术、草编技艺

### DAY 5 (1月22日) - 五女山冰葡萄酒庄园
地点：桓仁满族自治县（世界文化遗产五女山脚下）
内容：参观亚洲最大的冰酒生产基地之一。桓仁被誉为"中国冰酒之乡"，独特气候条件造就品质卓越的冰葡萄酒。
亮点：冰酒产业、特色农业、产业振兴`

// 构建系统提示词
function buildSystemPrompt(characterId: string): string {
  const personality = CHARACTER_PERSONALITIES[characterId] || CHARACTER_PERSONALITIES.youmi

  return `${personality}

你是"贡物新绎 溯产助传"实践团的AI助手，你的任务是帮助访客了解本次大连理工大学社会实践活动的相关内容。

${BASE_CONTEXT}

## 回答要求
1. 用符合你角色性格的语气回答，保持角色一致性
2. 回答要简洁明了，重点突出
3. 可以适当使用表情符号增加亲和力
4. 如果被问到与本次实践无关的问题，礼貌地引导回实践话题
5. 鼓励访客浏览网站各个页面了解更多详情
6. 回答控制在150字以内`
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<ChatRequest>(event)

  if (!body.message) {
    throw createError({
      statusCode: 400,
      message: '消息不能为空'
    })
  }

  // 根据角色构建系统提示词
  const systemPrompt = buildSystemPrompt(body.characterId || 'youmi')

  // 构建消息列表
  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...body.history.slice(-10), // 保留最近10条历史
    { role: 'user', content: body.message }
  ]

  try {
    const response = await $fetch<{
      choices: Array<{
        message: {
          content: string
        }
      }>
    }>(config.openaiBaseUrl + '/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.openaiApiKey}`
      },
      body: {
        model: config.openaiModel || 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        max_tokens: 300
      }
    })

    const assistantMessage = response.choices[0]?.message?.content || '抱歉，我暂时无法回答这个问题。'

    return {
      success: true,
      message: assistantMessage
    }
  } catch (error: any) {
    console.error('AI API Error:', error)

    // 返回友好的错误提示
    return {
      success: false,
      message: '哎呀，我现在有点累了，请稍后再试试吧~ 你也可以先浏览网站了解我们的实践内容哦！'
    }
  }
})
