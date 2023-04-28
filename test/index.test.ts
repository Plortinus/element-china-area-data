/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { describe, expect, it } from "vitest";
import {
  provinceAndCityData,
  pcTextArr,
  regionData,
  pcaTextArr,
  codeToText,
} from "../src/index";

describe("provinceAndCityData test", () => {
  it("北京市label= ", () => {
    expect(provinceAndCityData[0].label).toEqual("北京市");
  });

  it("北京市value = ", () => {
    expect(provinceAndCityData[0].value).toEqual("11");
  });

  it("东城区 label= ", () => {
    expect(provinceAndCityData[0].children![0].label).toEqual("东城区");
  });

  it("东城区 value= ", () => {
    expect(provinceAndCityData[0].children![0].value).toEqual("110101");
  });
});

describe("pcTextArr test", () => {
  it("北京市label= ", () => {
    expect(pcTextArr[0].label).toEqual("北京市");
  });

  it("北京市value = ", () => {
    expect(pcTextArr[0].value).toEqual("北京市");
  });

  it("东城区 label= ", () => {
    expect(pcTextArr[0].children![0].label).toEqual("东城区");
  });

  it("东城区 value= ", () => {
    expect(pcTextArr[0].children![0].value).toEqual("东城区");
  });
});

describe("regionData test", () => {
  it("北京市label= ", () => {
    expect(regionData[0].label).toEqual("北京市");
  });

  it("北京市value = ", () => {
    expect(regionData[0].value).toEqual("11");
  });

  it("市辖区 label= ", () => {
    expect(regionData[0].children![0].label).toEqual("市辖区");
  });

  it("市辖区 value= ", () => {
    expect(regionData[0].children![0].value).toEqual("1101");
  });

  it("东城区 label= ", () => {
    expect(regionData[0].children![0].children![0].label).toEqual("东城区");
  });

  it("东城区 value= ", () => {
    expect(regionData[0].children![0].children![0].value).toEqual("110101");
  });
});

describe("pcaTextArr test", () => {
  it("北京市label= ", () => {
    expect(pcaTextArr[0].label).toEqual("北京市");
  });

  it("北京市value = ", () => {
    expect(pcaTextArr[0].value).toEqual("北京市");
  });

  it("市辖区 label= ", () => {
    expect(pcaTextArr[0].children![0].label).toEqual("市辖区");
  });

  it("市辖区 value= ", () => {
    expect(pcaTextArr[0].children![0].value).toEqual("市辖区");
  });

  it("东城区 value= ", () => {
    expect(pcaTextArr[0].children![0].children![0].value).toEqual("东城区");
  });

  it("东城区 value= ", () => {
    expect(pcaTextArr[0].children![0].children![0].value).toEqual("东城区");
  });
});

describe("codeToText test", () => {
  it("北京市= ", () => {
    expect(codeToText["11"]).toEqual("北京市");
  });
  it("市辖区= ", () => {
    expect(codeToText["1101"]).toEqual("市辖区");
  });
  it("通州区 = ", () => {
    expect(codeToText["110112"]).toEqual("通州区");
  });
});
