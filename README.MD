# Element UI 中国省市区级联数据

[![npm](https://img.shields.io/npm/v/element-china-area-data.svg)](https://www.npmjs.com/package/element-china-area-data) [![npm](https://img.shields.io/npm/dm/element-china-area-data.svg)](https://www.npmjs.com/package/element-china-area-data)


## 安装

  `npm install element-china-area-data -S`

## 在线示例

[地址在此，网页打开会比较慢](https://plortinus.github.io/element-china-area-data/index.html)

## 使用

  * 省市二级联动:
    ```js
    <template>
      <div id="app">
        <el-cascader
          size="large"
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </div>
    </template>

    <script>
      import { provinceAndCityData } from 'element-china-area-data'
      export default {
        data () {
          return {
            options: provinceAndCityData,
            selectedOptions: []
          }
        },

        methods: {
          handleChange (value) {
            console.log(value)
          }
        }
      }
    </script>
    ```

    * 省市区三级联动

    ```js
    <template>
      <div id="app">
        <el-cascader
          size="large"
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </div>
    </template>

    <script>
      import { regionData } from 'element-china-area-data'
      export default {
        data () {
          return {
            options: regionData,
            selectedOptions: []
          }
        },

        methods: {
          handleChange (value) {
            console.log(value)
          }
        }
      }
    </script>
    ```

## 绑定value格式

value是一个数组，第一项是区域码，第二项是名称，例：`["110000", "北京市"]`

## 数据来源

[china-area-data](https://github.com/airyland/china-area-data)
