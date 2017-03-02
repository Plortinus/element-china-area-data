'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regionData = exports.provinceAndCityData = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _chinaAreaData = require('china-area-data');

var _chinaAreaData2 = _interopRequireDefault(_chinaAreaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    value: [prop, _chinaAreaData2.default[rootCode][prop]],
    label: _chinaAreaData2.default[rootCode][prop]
  });
}

// 计算市
for (var i = 0; i < regionData.length; i++) {
  var provinceCode = regionData[i].value[0];
  var provinceChildren = [];
  for (var _prop in _chinaAreaData2.default[provinceCode]) {
    provinceChildren.push({
      value: [_prop, _chinaAreaData2.default[provinceCode][_prop]],
      label: _chinaAreaData2.default[provinceCode][_prop]
    });
  }
  regionData[i].children = provinceChildren;
}

exports.provinceAndCityData = provinceAndCityData = cloneArray(regionData);

// 计算区
for (var _i = 0; _i < regionData.length; _i++) {
  var province = regionData[_i].children;
  for (var j = 0; j < province.length; j++) {
    var cityCode = province[j].value[0];
    var cityChildren = [];
    for (var _prop2 in _chinaAreaData2.default[cityCode]) {
      cityChildren.push({
        value: [_prop2, _chinaAreaData2.default[cityCode][_prop2]],
        label: _chinaAreaData2.default[cityCode][_prop2]
      });
    }
    province[j].children = cityChildren;
  }
}

exports.provinceAndCityData = provinceAndCityData;
exports.regionData = regionData;