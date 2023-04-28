# Element UI 中国省市区级联数据

[![npm](https://img.shields.io/npm/v/element-china-area-data.svg)](https://www.npmjs.com/package/element-china-area-data) [![npm](https://img.shields.io/npm/dt/element-china-area-data.svg)](https://www.npmjs.com/package/element-china-area-data)

## v6改动

  0. 改用全新脚手架构建，同时支持 CommonJS 和 ESM modules
  1. 去掉了provinceAndCityDataPlus/regionDataPlus/TextToCode
  2. CodeToText修改为codeToText
  3. 添加了纯汉字的数据对象pcTextArr和pcaTextArr
  4. 不再支持港澳台
## 旧版本v5.0.2
[文档地址](./V5.MD)

## 安装

  `npm install element-china-area-data -S`

[在线示例](https://plortinus.github.io/element-china-area-data/index.html)

## 使用

```js
import { provinceAndCityData, pcTextArr, regionData, pcaTextArr, codeToText } from 'element-china-area-data'
```

  1. `provinceAndCityData`省市二级联动数据,汉字+code
  2. `regionData`省市区三级联动数据
  3. `pcTextArr`省市联动数据，纯汉字
  4. `pcaTextArr`省市区联动数据，纯汉字
  5. `codeToText`是个大对象，属性是区域码，属性值是汉字 用法例如：`codeToText['110000']`输出`北京市`


  * 省市二级联动:
    ```js
    <template>
      <div id="app">
        <el-cascader
          size="large"
          :options="provinceAndCityData"
          v-model="selectedOptions">
        </el-cascader>
      </div>
    </template>

    <script>
      import { provinceAndCityData } from 'element-china-area-data'
      export default {
        data () {
          return {
            provinceAndCityData,
            selectedOptions: []
          }
        },
      }
    </script>
    ```

    * 省市二级联动,纯汉字:
      ```js
      <template>
        <div id="app">
          <el-cascader
            size="large"
            :options="pcTextArr"
            v-model="selectedOptions">
          </el-cascader>
        </div>
      </template>

      <script>
        import { pcTextArr } from 'element-china-area-data'
        export default {
          data () {
            return {
              pcTextArr,
              selectedOptions: []
            }
          },
        }
      </script>
      ```

    * 省市区三级联动

    ```js
    <template>
      <div id="app">
        <el-cascader
          size="large"
          :options="regionData"
          v-model="selectedOptions">
        </el-cascader>
      </div>
    </template>

    <script>
      import { regionData } from 'element-china-area-data'
      export default {
        data () {
          return {
            regionData,
            selectedOptions: []
          }
        },
      }
    </script>
    ```

    * 省市区三级联动，纯汉字

    ```js
    <template>
      <div id="app">
        <el-cascader
          size="large"
          :options="pcaTextArr"
          v-model="selectedOptions">
        </el-cascader>
      </div>
    </template>

    <script>
      import { pcaTextArr } from 'element-china-area-data'
      export default {
        data () {
          return {
            pcaTextArr,
            selectedOptions: []
          }
        },
      }
    </script>
    ```

## 数据来源

[Administrative-divisions-of-China](https://github.com/modood/Administrative-divisions-of-China)

## 开发测试命令

- dev - starts dev server
- build - generates the following bundles: CommonJS (.cjs) ESM (.mjs) and IIFE (.iife.js). The name of bundle isautomatically taken from package.json name property
- test - starts vitest and runs all tests
- test:coverage - starts vitest and run all tests with code coverage report
- lint:scripts - lint .ts files with eslint
- lint:styles - lint .css and .scss files with stylelint
- format:scripts - format .ts, .html and .json files with prettier
- format:styles - format .cs and .scss files with stylelint
- format - format all with prettier and stylelint
- prepare - script for setting up husky pre-commit hook
- uninstall-husky - script for removing husky from repository
