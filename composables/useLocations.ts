import type { Location } from '~/types'
import { locations as locationsData, mapConfig, getCategoryLabel, getCategoryColor } from '~/data/locations'

export function useLocations() {
  // 所有地点数据
  const locations = ref<Location[]>(locationsData)

  // 当前选中的地点
  const selectedLocation = ref<Location | null>(null)

  // 地图配置
  const config = mapConfig

  // 选择地点
  function selectLocation(location: Location | null) {
    selectedLocation.value = location
  }

  // 根据ID获取地点
  function getLocationById(id: number): Location | undefined {
    return locations.value.find(loc => loc.id === id)
  }

  // 获取按日期排序的地点
  const sortedLocations = computed(() => {
    return [...locations.value].sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
  })

  // 获取地点路线坐标（按时间顺序）
  const routeCoordinates = computed(() => {
    return sortedLocations.value.map(loc => loc.coordinates)
  })

  // 格式化日期显示
  function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${month}月${day}日`
  }

  // 获取类别标签
  function getCategoryLabelFn(category: string): string {
    return getCategoryLabel(category)
  }

  // 获取类别颜色
  function getCategoryColorFn(category: string): string {
    return getCategoryColor(category)
  }

  return {
    locations,
    selectedLocation,
    config,
    selectLocation,
    getLocationById,
    sortedLocations,
    routeCoordinates,
    formatDate,
    getCategoryLabel: getCategoryLabelFn,
    getCategoryColor: getCategoryColorFn
  }
}
