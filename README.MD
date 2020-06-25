# Element UI 中国省市区级联数据

[![npm](https://img.shields.io/npm/v/element-china-area-data.svg)](https://www.npmjs.com/package/element-china-area-data) [![npm](https://img.shields.io/npm/dt/element-china-area-data.svg)](https://www.npmjs.com/package/element-china-area-data)


## 安装

  `npm install element-china-area-data -S`

## 在线示例

[地址在此，网页打开会比较慢](https://plortinus.github.io/element-china-area-data/index.html)

## 使用

```js
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
```

  1. `provinceAndCityData`是省市二级联动数据（不带“全部”选项）
  2. `regionData`是省市区三级联动数据（不带“全部”选项）
  3. `provinceAndCityDataPlus`是省市区三级联动数据（带“全部”选项）
  4. `regionDataPlus`是省市区三级联动数据（带“全部”选项）
  5. "全部"选项绑定的value是空字符串`""`
  6. `CodeToText`是个大对象，属性是区域码，属性值是汉字 用法例如：`CodeToText['110000']`输出`北京市`
  7. `TextToCode`是个大对象，属性是汉字，属性值是区域码 用法例如：`TextToCode['北京市'].code`输出`110000`,`TextToCode['北京市']['市辖区'].code`输出`110100`,`TextToCode['北京市']['市辖区']['朝阳区'].code`输出`110105`


  * 省市二级联动（不带“全部”选项）:
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

    * 省市二级联动（带“全部”选项）:
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
        import { provinceAndCityDataPlus } from 'element-china-area-data'
        export default {
          data () {
            return {
              options: provinceAndCityDataPlus,
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

    * 省市区三级联动（不带“全部”选项）

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

    * 省市区三级联动（带“全部”选项）

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
      import { regionDataPlus } from 'element-china-area-data'
      export default {
        data () {
          return {
            options: regionDataPlus,
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

value是区域码`"110000"`

## 数据来源

[china-area-data v5.0.0](https://github.com/airyland/china-area-data)

## 开发过程

`npm run dev` 是开发

`npm run build` + `npm run build-commonjs` + `npm run docs` 是准备发布
