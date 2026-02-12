import type { Location, TeamInfo, MapConfig } from '~/types'

// 实践地点数据 - 按时间顺序
export const locations: Location[] = [
  {
    id: 1,
    name: '本溪湖工业遗址群',
    coordinates: [41.2992, 123.7647],
    date: '2026-01-18',
    description: '探访"中国第一铁"，见证本钢一号高炉百年沧桑',
    category: 'industrial',
    highlights: ['中国第一铁', '本钢一号高炉', '工业遗产'],
    diaryUrl: '',
    videoUrl: '',
    images: []
  },
  {
    id: 2,
    name: '辽宁东北抗日义勇军纪念馆',
    coordinates: [41.2677, 125.3614],
    date: '2026-01-19',
    description: '追寻东北三省抗日脉络，感受义勇军精神',
    category: 'cultural',
    highlights: ['民族烽火', '义勇军精神', '国歌诞生地'],
    diaryUrl: '',
    videoUrl: '',
    images: []
  },
  {
    id: 3,
    name: '桓仁冷水鱼渔场',
    coordinates: [41.2500, 125.3500],
    date: '2026-01-20',
    description: '深山渔场探访细鳞鱼，直播助农获6.1万点赞',
    category: 'industrial',
    highlights: ['细鳞鱼', '贡物往事', '直播助农'],
    diaryUrl: '',
    videoUrl: '',
    images: []
  },
  {
    id: 4,
    name: '非遗版画草编传承体验基地',
    coordinates: [41.2700, 125.3700],
    date: '2026-01-21',
    description: '非遗版画草编传承体验基地是桓仁县传统文化保护与传承的重要阵地，在这里可以亲身体验版画制作和草编技艺，感受非物质文化遗产的独特魅力，了解传统手工艺的传承与创新。',
    category: 'cultural',
    highlights: ['非遗传承', '版画艺术', '草编技艺'],
    diaryUrl: '',
    videoUrl: '',
    images: []
  },
  {
    id: 5,
    name: '五女山冰葡萄酒庄园',
    coordinates: [41.2847, 125.3054],
    date: '2026-01-22',
    description: '五女山冰葡萄酒庄园位于世界文化遗产五女山脚下，是亚洲最大的冰酒生产基地之一。桓仁被誉为"中国冰酒之乡"，独特的气候条件造就了品质卓越的冰葡萄酒，冰酒产业已成为当地重要的经济支柱。',
    category: 'industrial',
    highlights: ['冰酒产业', '特色农业', '产业振兴'],
    diaryUrl: '',
    videoUrl: '',
    images: []
  }
]

// 团队信息
export const teamInfo: TeamInfo = {
  name: '贡物新绎 溯产助传',
  slogan: '探寻文化根脉，助力乡村振兴',
  description: '大连理工大学软件学院、国际信息与软件学院甘露公益协会"贡物新绎·溯产助传"实践团，深入辽宁省本溪市开展社会实践活动。团队以"探寻文化根脉，助力乡村振兴"为主题，通过实地调研、文化考察、直播助农等方式，深入了解当地的工业遗产、红色文化、特色产业和非遗传承，为乡村振兴贡献青年力量。',
  university: '大连理工大学',
  college: '软件学院、国际信息与软件学院',
  practiceTheme: '乡村振兴·文化传承·产业发展',
  practiceTime: '2026年1月18日 - 2026年1月22日',
  practiceLocation: '辽宁省本溪市',
  members: [
    // 队长
    { name: '文博', role: '队长 - 文案、PPT 制作、当地沟通', major: '软国 2506' },
    // 队员
    { name: '马玉', role: '文案、绘画设计、直播', major: '软件 2410' },
    { name: '郝奕', role: '文案写作、PPT 制作', major: '软国 2506' },
    { name: '莫微', role: '文书写作、公众号推文', major: '计科 2401' },
    { name: '刘源玫', role: '绘画设计、视频拍摄', major: '软件 2411' },
    { name: '秦旭', role: '视频脚本、规划统筹', major: '集成 2401' },
    { name: '杨清皓', role: '视频拍摄、直播', major: '软国 2402' },
    { name: '徐广平', role: '视频脚本、公众号推文', major: '软国 2506' },
    { name: '陈拓宇', role: '视频拍摄、PPT 制作', major: '软国 2509' },
    { name: '金硕国', role: '直播、数据分析、网页', major: '软件 2407' },
    { name: '吴顾宸', role: 'PPT 制作、直播', major: '集成 2409' },
    { name: '郭锴齐', role: '网页制作、全栈开发', major: '软国 2501' }
  ],
  advisors: []
}

// 地图配置 - 调整中心点以覆盖本溪市区和桓仁县
export const mapConfig: MapConfig = {
  center: [41.28, 124.55],  // 本溪与桓仁之间
  zoom: 9,
  minZoom: 8,
  maxZoom: 17
}

// 获取类别标签
export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    cultural: '文化遗产',
    industrial: '产业调研',
    natural: '自然生态',
    educational: '教育实践',
    community: '社区调研'
  }
  return labels[category] || '其他'
}

// 获取类别颜色
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    cultural: '#9C27B0',    // 紫色
    industrial: '#FF9800',   // 橙色
    natural: '#4CAF50',      // 绿色
    educational: '#2196F3',  // 蓝色
    community: '#607D8B'     // 灰蓝
  }
  return colors[category] || '#003366'
}
