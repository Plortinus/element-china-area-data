import REGION_DATA from 'china-area-data'
// 深拷贝数组
const cloneArray = function (obj) {
  const newArray = []
  for (const i in obj) {
    newArray[i] = typeof obj[i] === 'object'
    ? cloneArray(obj[i]) : obj[i]
  }
  return newArray
}

const rootCode = '86'
const regionData = []
let provinceAndCityData = []
// 计算省
for (const prop in REGION_DATA[rootCode]) {
  regionData.push({
    value: [prop, REGION_DATA[rootCode][prop]],
    label: REGION_DATA[rootCode][prop]
  })
}

// 计算市
for (let i = 0; i < regionData.length; i++) {
  const provinceCode = regionData[i].value[0]
  const provinceChildren = []
  for (const prop in REGION_DATA[provinceCode]) {
    provinceChildren.push({
      value: [prop, REGION_DATA[provinceCode][prop]],
      label: REGION_DATA[provinceCode][prop]
    })
  }
  if (provinceChildren.length) {
    regionData[i].children = provinceChildren
  }
}

provinceAndCityData = cloneArray(regionData)

// 计算区
for (let i = 0; i < regionData.length; i++) {
  const province = regionData[i].children
  if (province) {
    for (let j = 0; j < province.length; j++) {
      const cityCode = province[j].value[0]
      const cityChildren = []
      for (const prop in REGION_DATA[cityCode]) {
        cityChildren.push({
          value: [prop, REGION_DATA[cityCode][prop]],
          label: REGION_DATA[cityCode][prop]
        })
      }
      if (cityChildren.length) {
        province[j].children = cityChildren
      }
    }
  }
}

export { provinceAndCityData, regionData }
