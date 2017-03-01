var REGION_DATA = require('china-area-data')

// 深拷贝数组
const cloneArray = function(obj){
  let newArray = []
  for(let i in obj){
    newArray[i] = typeof obj[i] === 'object' ?
    cloneArray(obj[i]) : obj[i]
  }
  return newArray
}

const rootCode = '86'
let regionData = []
let provinceAndCityData = []
// 计算省
for (let prop in REGION_DATA[rootCode]) {
  regionData.push({
    value: [prop, REGION_DATA[rootCode][prop]],
    label: REGION_DATA[rootCode][prop],
  })
}

// 计算市
for (let i = 0; i < regionData.length; i++) {
  let provinceCode = regionData[i].value[0]
  let provinceChildren = []
  for (let prop in REGION_DATA[provinceCode]) {
    provinceChildren.push({
      value: [prop, REGION_DATA[provinceCode][prop]],
      label: REGION_DATA[provinceCode][prop],
    })
  }
  regionData[i].children = provinceChildren
}

provinceAndCityData = cloneArray(regionData)

// 计算区
for(let i = 0; i < regionData.length; i++) {
  let province = regionData[i].children
  for(let j = 0;j < province.length; j++) {
    let cityCode = province[j].value[0]
    let cityChildren = []
    for (let prop in REGION_DATA[cityCode]) {
      cityChildren.push({
        value: [prop, REGION_DATA[cityCode][prop]],
        label: REGION_DATA[cityCode][prop],
      })
    }
    province[j].children = cityChildren
  }
}

module.exports.provinceAndCityData = provinceAndCityData
module.exports.regionData = regionData
