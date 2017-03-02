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
    <div class="three">
      三级联动
      <el-cascader
        size="large"
        :options="regionData"
        v-model="selectedOptions2"
        @change="handleChange">
      </el-cascader>
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
        selectedOptions2: [],
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
    width: 500px;
  }
  .three {
    margin-top: 100px;
  }
</style>
