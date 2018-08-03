<template>
  <div class="area">
    <div>
      <span class="imp">1. 二级联动（不带“全部”选项）</span>
      <el-cascader
        size="large"
        :options="provinceAndCityData"
        v-model="selectedOptions1"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      <div>绑定值：{{selectedOptions1}}</div>
      <div>区域码转汉字：{{CodeToText[selectedOptions1[0]]}},{{CodeToText[selectedOptions1[1]]}}</div>
      <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions1[0]], CodeToText[selectedOptions1[1]])}}</div>
    </div>
    <div class="three">
      <span class="imp">2. 二级联动(带有“全部”选项)</span>
      <el-cascader
        size="large"
        :options="provinceAndCityDataPlus"
        v-model="selectedOptions3"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      <div>绑定值：{{selectedOptions3}}</div>
      <div>区域码转汉字：{{CodeToText[selectedOptions3[0]]}},{{CodeToText[selectedOptions3[1]]}}</div>
      <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions3[0]], CodeToText[selectedOptions3[1]])}}</div>
    </div>
    <div class="three">
      <span class="imp">3. 三级联动（不带“全部”选项）</span>
      <el-cascader
        class="long"
        size="large"
        :options="regionData"
        v-model="selectedOptions2"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      <div>绑定值：{{selectedOptions2}}</div>
      <div>区域码转汉字：{{CodeToText[selectedOptions2[0]]}},{{CodeToText[selectedOptions2[1]]}},{{CodeToText[selectedOptions2[2]]}}</div>
      <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions2[0]], CodeToText[selectedOptions2[1]], CodeToText[selectedOptions2[2]])}}</div>
    </div>
    <div class="three">
      <span class="imp">4. 三级联动(带"全部选项")</span>
      <el-cascader
        size="large"
        class="long"
        :options="regionDataPlus"
        v-model="selectedOptions4"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      <div>绑定值：{{selectedOptions4}}</div>
      <div>区域码转汉字：{{CodeToText[selectedOptions4[0]]}},{{CodeToText[selectedOptions4[1]]}},{{CodeToText[selectedOptions4[2]]}}</div>
      <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions4[0]], CodeToText[selectedOptions4[1]], CodeToText[selectedOptions4[2]])}}</div>
    </div>
  </div>
</template>

<script>
import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode
} from "../dist/app.js";

export default {
  data() {
    return {
      CodeToText,
      TextToCode,
      BeiJing: CodeToText["110000"],
      provinceAndCityData,
      provinceAndCityDataPlus,
      regionData,
      regionDataPlus,
      selectedOptions1: ["110000", "110100"],
      selectedOptions2: ["120000", "120100", "120101"],
      selectedOptions3: ["130000", ""],
      selectedOptions4: ["120000", "120100", ""]
    };
  },

  methods: {
    handleChange(value) {
      console.log(value);
    },
    convertTextToCode(provinceText, cityText, regionText) {
      let code = "";
      if (provinceText && this.TextToCode[provinceText]) {
        const province = this.TextToCode[provinceText];
        code += province.code + ", ";
        if (cityText && province[cityText]) {
          const city = province[cityText];
          code += city.code + ", ";
          if (regionText && city[regionText]) {
            code += city[regionText].code;
          }
        }
      }
      return code;
    }
  },

  mounted() {
    console.log(this.TextToCode["北京市"].code);
    console.log(this.TextToCode["北京市"]["市辖区"].code);
    console.log(this.TextToCode["北京市"]["市辖区"]["朝阳区"].code);
  }
};
</script>

<style>
.long {
  width: 250px;
}
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
  line-height: 40px;
  text-indent: 15px;
}
.imp {
  color: #409eff;
}
</style>
