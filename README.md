# 本溪实践网站

大连理工大学"贡物新绎 溯产助传"实践团成果展示网站。

## 技术栈

- **框架**: Nuxt 3 + TypeScript
- **样式**: TailwindCSS
- **地图**: Leaflet.js (使用高德地图图层)
- **动画**: Vue 内置过渡效果

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
本溪实践网站/
├── nuxt.config.ts          # Nuxt 配置
├── package.json
├── tailwind.config.js      # TailwindCSS 配置
├── app.vue                 # 应用入口
├── assets/css/main.css     # 全局样式
├── components/             # Vue 组件
│   ├── AppHeader.vue       # 头部导航
│   ├── AppFooter.vue       # 底部
│   ├── TeamInfo.vue        # 团队信息
│   ├── InteractiveMap.vue  # 互动地图
│   ├── LocationCard.vue    # 地点卡片
│   └── VideoPlayer.vue     # 视频播放器
├── composables/            # 组合式函数
│   └── useLocations.ts     # 地点数据管理
├── data/                   # 数据配置
│   └── locations.ts        # 实践地点数据
├── pages/                  # 页面
│   ├── index.vue           # 首页（地图）
│   └── about.vue           # 团队介绍
├── public/images/          # 静态图片
└── types/index.ts          # TypeScript 类型
```

## 数据配置

### 修改实践地点

编辑 `data/locations.ts` 文件中的 `locations` 数组：

```typescript
{
  id: 1,
  name: '地点名称',
  coordinates: [纬度, 经度],
  date: '2024-07-15',
  description: '地点描述',
  category: 'cultural', // cultural | industrial | natural | educational | community
  highlights: ['亮点1', '亮点2'],
  diaryUrl: '微信公众号链接',
  videoUrl: 'B站视频链接',
  images: ['图片路径']
}
```

### 修改团队信息

编辑 `data/locations.ts` 文件中的 `teamInfo` 对象。

## 主题配色

- 主色 (深蓝): `#003366`
- 辅助色 (亮蓝): `#0066CC`
- 点缀色 (橙色): `#FF6600`

可在 `tailwind.config.js` 中自定义颜色。
