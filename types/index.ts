// 地点数据类型定义
export interface Location {
  id: number
  name: string                    // 地点名称
  coordinates: [number, number]   // 经纬度 [纬度, 经度]
  date: string                    // 实践日期
  description: string             // 简介
  diaryUrl?: string               // 微信公众号日志链接
  videoUrl?: string               // 视频链接 (B站/本地)
  images?: string[]               // 图片列表
  category?: LocationCategory     // 地点类别
  highlights?: string[]           // 活动亮点
}

// 地点类别
export type LocationCategory =
  | 'cultural'     // 文化遗产
  | 'industrial'   // 工业/产业
  | 'natural'      // 自然景观
  | 'educational'  // 教育实践
  | 'community'    // 社区调研

// 团队信息类型
export interface TeamInfo {
  name: string              // 团队名称
  slogan: string            // 口号/主题
  description: string       // 团队简介
  university: string        // 学校名称
  college?: string          // 学院名称
  practiceTheme: string     // 实践主题
  practiceTime: string      // 实践时间
  practiceLocation: string  // 实践地点
  members?: TeamMember[]    // 成员列表
  advisors?: Advisor[]      // 指导老师
}

// 团队成员
export interface TeamMember {
  name: string
  role?: string         // 角色/职责
  avatar?: string       // 头像
  major?: string        // 专业
  grade?: string        // 年级
}

// 指导老师
export interface Advisor {
  name: string
  title?: string        // 职称
  avatar?: string
}

// 视频信息类型
export interface VideoInfo {
  type: 'bilibili' | 'local' | 'youtube'
  url: string
  title?: string
  cover?: string        // 封面图
  duration?: string     // 时长
}

// 地图配置
export interface MapConfig {
  center: [number, number]   // 地图中心点
  zoom: number               // 初始缩放级别
  minZoom?: number
  maxZoom?: number
}
