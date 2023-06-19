# Element UI 中国省市区级联数据

[![npm](https://img.shields.io/npm/v/element-china-area-data.svg)](https://www.npmjs.com/package/element-china-area-data) ![npm](https://img.shields.io/npm/dw/element-china-area-data) ![GitHub top language](https://img.shields.io/github/languages/top/Plortinus/element-china-area-data) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/element-china-area-data) ![GitHub](https://img.shields.io/github/license/Plortinus/element-china-area-data)

## 演示效果 gif

![20230508-093525](https://user-images.githubusercontent.com/20693993/236715340-09fb0820-781b-4faf-8a0f-3f24012d8213.gif)

## v6 改动

0. 改用全新脚手架构建，同时支持 CommonJS 和 ESM modules
1. 去掉了 provinceAndCityDataPlus/regionDataPlus/TextToCode，全选功能请利用级联组件自身的
2. CodeToText 修改为 codeToText
3. 添加了纯汉字的数据对象 pcTextArr 和 pcaTextArr
4. 不再支持港澳台，使用新的数据源https://github.com/modood/Administrative-divisions-of-China

## 旧版本 v5.0.2

[文档地址](./V5.MD)

## 安装

```bash
npm install element-china-area-data -S
```

[在线示例](https://plortinus.github.io/element-china-area-data/index.html)

## import 使用

```js
import {
  provinceAndCityData,
  pcTextArr,
  regionData,
  pcaTextArr,
  codeToText,
} from "element-china-area-data";
```

1. `provinceAndCityData`省市二级联动数据,汉字+code
2. `regionData`省市区三级联动数据
3. `pcTextArr`省市联动数据，纯汉字
4. `pcaTextArr`省市区联动数据，纯汉字
5. `codeToText`是个大对象，属性是区域码，属性值是汉字 用法例如：`codeToText['110000']`输出`北京市`

- 省市二级联动:

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

- 省市二级联动,纯汉字:

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

- 省市区三级联动

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

- 省市区三级联动，纯汉字

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

## script 引入

```html
<script src="https://unpkg.com/element-china-area-data@6.0.0/dist/element-china-area-data.iife.js"></script>
<script>
  new Vue({
    el: "#app",
    data: function () {
      return {
        codeToText: elementChinaAreaData.codeToText,
        provinceAndCityData: elementChinaAreaData.provinceAndCityData,
        pcTextArr: elementChinaAreaData.pcTextArr,
        regionData: elementChinaAreaData.regionData,
        pcaTextArr: elementChinaAreaData.pcaTextArr,
        selectedOptions1: ["11", "110101"],
        selectedOptions2: ["12", "1201", "120101"],
        selectedOptions3: ["北京市", "朝阳区"],
        selectedOptions4: ["北京市", "市辖区", "朝阳区"],
      };
    },
  });
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
