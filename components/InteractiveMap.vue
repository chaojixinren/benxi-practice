<template>
  <div class="relative">
    <!-- 地图容器 -->
    <div ref="mapContainer" class="map-container" />

    <!-- 地点详情卡片 -->
    <Transition name="slide-up">
      <LocationCard
        v-if="selectedLocation"
        :location="selectedLocation"
        class="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-10"
        @close="closeCard"
      />
    </Transition>

    <!-- 地点列表按钮（移动端） -->
    <button
      class="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg z-10 md:hidden"
      @click="showLocationList = !showLocationList"
    >
      <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    </button>

    <!-- 地点列表侧边栏 -->
    <Transition name="slide-up">
      <div
        v-if="showLocationList"
        class="absolute top-16 right-4 bg-white rounded-lg shadow-lg z-10 w-72 max-h-80 overflow-y-auto md:hidden"
      >
        <div class="p-4">
          <h3 class="font-bold text-gray-800 mb-3">实践地点</h3>
          <ul class="space-y-2">
            <li
              v-for="loc in sortedLocations"
              :key="loc.id"
              class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              :class="{ 'bg-primary-50': selectedLocation?.id === loc.id }"
              @click="selectAndFly(loc)"
            >
              <p class="font-medium text-gray-800 text-sm">{{ loc.name }}</p>
              <p class="text-xs text-gray-500">{{ formatDate(loc.date) }}</p>
            </li>
          </ul>
        </div>
      </div>
    </Transition>

    <!-- 图例 -->
    <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md z-10 hidden md:block">
      <h4 class="text-xs font-semibold text-gray-600 mb-2">图例</h4>
      <div class="space-y-1">
        <div class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full bg-primary"></span>
          <span class="text-xs text-gray-600">实践地点</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full bg-accent"></span>
          <span class="text-xs text-gray-600">当前选中</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="w-6 h-0.5 bg-primary-500"></span>
          <span class="text-xs text-gray-600">行程路线</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Location } from '~/types'

const { locations, selectedLocation, config, selectLocation, sortedLocations, formatDate, getCategoryColor } = useLocations()

const mapContainer = ref<HTMLElement | null>(null)
const showLocationList = ref(false)

let map: any = null
let markers: any[] = []
let routeLine: any = null

// 关闭详情卡片
function closeCard() {
  selectLocation(null)
  // 重置所有标记样式
  markers.forEach(marker => {
    const el = marker.getElement()
    if (el) {
      el.classList.remove('active')
    }
  })
}

// 选择地点并飞行到该位置
function selectAndFly(location: Location) {
  selectLocation(location)
  showLocationList.value = false
  if (map) {
    map.flyTo(location.coordinates, 14, { duration: 1 })
    // 更新标记样式
    markers.forEach(marker => {
      const el = marker.getElement()
      if (el) {
        el.classList.toggle('active', marker.options.locationId === location.id)
      }
    })
  }
}

// 初始化地图
async function initMap() {
  if (!mapContainer.value || !import.meta.client) return

  const L = await import('leaflet')

  // 创建地图
  map = L.map(mapContainer.value, {
    center: config.center,
    zoom: config.zoom,
    minZoom: config.minZoom,
    maxZoom: config.maxZoom,
    zoomControl: true
  })

  // 添加地图图层（使用高德地图）
  L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    attribution: '&copy; 高德地图'
  }).addTo(map)

  // 创建自定义图标
  const createIcon = (color: string, isActive: boolean = false) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div class="custom-marker ${isActive ? 'active' : ''}" style="
          width: 24px;
          height: 24px;
          background: ${isActive ? '#FF6600' : color};
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })
  }

  // 添加地点标记
  locations.value.forEach((location, index) => {
    const color = getCategoryColor(location.category || 'community')
    const marker = L.marker(location.coordinates, {
      icon: createIcon(color),
      locationId: location.id
    } as any)

    marker.on('click', () => {
      selectLocation(location)
      // 更新所有标记样式
      markers.forEach(m => {
        const isActive = (m.options as any).locationId === location.id
        m.setIcon(createIcon(getCategoryColor(
          locations.value.find(l => l.id === (m.options as any).locationId)?.category || 'community'
        ), isActive))
      })
    })

    // 添加序号标签
    const numberIcon = L.divIcon({
      className: 'number-marker',
      html: `
        <div style="
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid ${color};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          color: ${color};
          position: relative;
          top: -30px;
          left: 10px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        ">${index + 1}</div>
      `,
      iconSize: [20, 20],
      iconAnchor: [0, 0]
    })

    // 创建序号标记
    const numberMarker = L.marker(location.coordinates, { icon: numberIcon, interactive: false })

    marker.addTo(map)
    numberMarker.addTo(map)
    markers.push(marker)
  })

  // 绘制行程路线
  const routeCoords = sortedLocations.value.map(loc => loc.coordinates)
  routeLine = L.polyline(routeCoords, {
    color: '#0066CC',
    weight: 3,
    opacity: 0.7,
    dashArray: '10, 10'
  }).addTo(map)

  // 自适应显示所有标记
  if (markers.length > 0) {
    const group = L.featureGroup(markers)
    map.fitBounds(group.getBounds().pad(0.1))
  }
}

// 组件挂载后初始化地图
onMounted(() => {
  initMap()
})

// 组件卸载时清理
onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})

// 暴露方法给父组件
defineExpose({
  selectAndFly
})
</script>

<style>
/* 确保 Leaflet 相关样式正确加载 */
.custom-div-icon {
  background: transparent !important;
  border: none !important;
}

.number-marker {
  background: transparent !important;
  border: none !important;
}
</style>
