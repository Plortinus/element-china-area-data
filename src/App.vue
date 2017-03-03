<template>
  <div class="area">
    <div>
      二级联动
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
      三级联动
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
  </div>
</template>

<script>
  import { provinceAndCityData, regionData } from '../dist/app.js'

  export default {
    data () {
      return {
        provinceAndCityData: provinceAndCityData,
        regionData: regionData,
        selectedOptions1: [],
        selectedOptions2: []
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
