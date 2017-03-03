<template>
  <div class="area">
    <div>
      二级联动（不带“全部”选项）
      <el-cascader
        size="large"
        :options="provinceAndCityData"
        v-model="selectedOptions1"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      绑定值：
      <span v-if="selectedOptions1[0]">
        ["{{selectedOptions1[0][0]}}","{{selectedOptions1[0][1]}}"]
        <span v-if="selectedOptions1[1]">
          ,["{{selectedOptions1[1][0]}}","{{selectedOptions1[1][1]}}"]
        </span>
      </span>
    </div>
    <div class="three">
      二级联动(带有“全部”选项)
      <el-cascader
        size="large"
        :options="provinceAndCityDataPlus"
        v-model="selectedOptions3"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      绑定值：
      <span v-if="selectedOptions3[0]">
        ["{{selectedOptions3[0][0]}}","{{selectedOptions3[0][1]}}"]
        <span v-if="selectedOptions3[1]">
          ,["{{selectedOptions3[1][0]}}","{{selectedOptions3[1][1]}}"]
        </span>
      </span>
    </div>
    <div class="three">
      三级联动（不带“全部”选项）
      <el-cascader
        size="large"
        :options="regionData"
        v-model="selectedOptions2"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      绑定值：
      <span v-if="selectedOptions2[0]">
        ["{{selectedOptions2[0][0]}}","{{selectedOptions2[0][1]}}"]
        <span v-if="selectedOptions2[1]">
          ,["{{selectedOptions2[1][0]}}","{{selectedOptions2[1][1]}}"]
        </span>
        <span v-if="selectedOptions2[2]">
          ,["{{selectedOptions2[2][0]}}","{{selectedOptions2[2][1]}}"]
        </span>
      </span>
    </div>
    <div class="three">
      三级联动(带"全部选项")
      <el-cascader
        size="large"
        :options="regionDataPlus"
        v-model="selectedOptions4"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      绑定值：
      <span v-if="selectedOptions4[0]">
        ["{{selectedOptions4[0][0]}}","{{selectedOptions4[0][1]}}"]
        <span v-if="selectedOptions4[1]">
          ,["{{selectedOptions4[1][0]}}","{{selectedOptions4[1][1]}}"]
        </span>
        <span v-if="selectedOptions4[2]">
          ,["{{selectedOptions4[2][0]}}","{{selectedOptions4[2][1]}}"]
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus } from '../dist/app.js'

  export default {
    data () {
      return {
        provinceAndCityData: provinceAndCityData,
        provinceAndCityDataPlus: provinceAndCityDataPlus,
        regionData: regionData,
        regionDataPlus: regionDataPlus,
        selectedOptions1: [],
        selectedOptions2: [],
        selectedOptions3: [],
        selectedOptions4: []
      }
    },

    methods: {
      handleChange (value) {
        console.log(value)
      }
    },

    mounted () {
      console.log(regionData)
    }
  }
</script>

<style>
  .area {
    padding-top: 50px;
    margin: 0 auto;
    width: 800px;
  }
  .three {
    margin-top: 100px;
  }
  .bind {
    margin-top: 20px;
  }
</style>
