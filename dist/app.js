'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeToText = exports.regionDataPlus = exports.provinceAndCityDataPlus = exports.regionData = exports.provinceAndCityData = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _chinaAreaData = require('china-area-data');

var _chinaAreaData2 = _interopRequireDefault(_chinaAreaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeToText = {};
// 深拷贝数组
var cloneArray = function cloneArray(obj) {
  var newArray = [];
  for (var i in obj) {
    newArray[i] = _typeof(obj[i]) === 'object' ? cloneArray(obj[i]) : obj[i];
  }
  return newArray;
};

var rootCode = '86';
var regionData = [];
var provinceAndCityData = [];
// 计算省
for (var prop in _chinaAreaData2.default[rootCode]) {
  regionData.push({
    value: prop,
    label: _chinaAreaData2.default[rootCode][prop]
  });
  CodeToText[prop] = _chinaAreaData2.default[rootCode][prop];
}

// 计算市
for (var i = 0; i < regionData.length; i++) {
  var provinceCode = regionData[i].value;
  var provinceChildren = [];
  for (var _prop in _chinaAreaData2.default[provinceCode]) {
    provinceChildren.push({
      value: _prop,
      label: _chinaAreaData2.default[provinceCode][_prop]
    });
    CodeToText[_prop] = _chinaAreaData2.default[provinceCode][_prop];
  }
  if (provinceChildren.length) {
    regionData[i].children = provinceChildren;
  }
}

exports.provinceAndCityData = provinceAndCityData = cloneArray(regionData);

// 计算区
for (var _i = 0; _i < regionData.length; _i++) {
  var province = regionData[_i].children;
  if (province) {
    for (var j = 0; j < province.length; j++) {
      var cityCode = province[j].value;
      var cityChildren = [];
      for (var _prop2 in _chinaAreaData2.default[cityCode]) {
        cityChildren.push({
          value: _prop2,
          label: _chinaAreaData2.default[cityCode][_prop2]
        });
        CodeToText[_prop2] = _chinaAreaData2.default[cityCode][_prop2];
      }
      if (cityChildren.length) {
        province[j].children = cityChildren;
      }
    }
  }
}

// 添加“全部”选项
var provinceAndCityDataPlus = cloneArray(provinceAndCityData);
provinceAndCityDataPlus.unshift({
  value: '',
  label: '全部'
});
for (var _i2 = 0; _i2 < provinceAndCityDataPlus.length; _i2++) {
  var _province = provinceAndCityDataPlus[_i2].children;
  if (_province && _province.length) {
    _province.unshift({
      value: '',
      label: '全部'
    });

    for (var _j = 0; _j < _province.length; _j++) {
      var city = _province[_j].children;
      if (city && city.length) {
        city.unshift({
          value: '',
          label: '全部'
        });
      }
    }
  }
}

var regionDataPlus = cloneArray(regionData);
regionDataPlus.unshift({
  value: '',
  label: '全部'
});
for (var _i3 = 0; _i3 < regionDataPlus.length; _i3++) {
  var _province2 = regionDataPlus[_i3].children;
  if (_province2 && _province2.length) {
    _province2.unshift({
      value: '',
      label: '全部'
    });

    for (var _j2 = 0; _j2 < _province2.length; _j2++) {
      var _city = _province2[_j2].children;
      if (_city && _city.length) {
        _city.unshift({
          value: '',
          label: '全部'
        });
      }
    }
  }
}
exports.provinceAndCityData = provinceAndCityData;
exports.regionData = regionData;
exports.provinceAndCityDataPlus = provinceAndCityDataPlus;
exports.regionDataPlus = regionDataPlus;
exports.CodeToText = CodeToText;