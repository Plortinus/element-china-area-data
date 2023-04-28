import pcC from "china-division/dist/pc-code.json";
import pcaC from "china-division/dist/pca-code.json";
import pc from "china-division/dist/pc.json";
import pca from "china-division/dist/pca.json";

interface DataItem {
  value: string;
  label: string;
  children?: DataItem[];
}

const formatData = (data: any[]): DataItem[] => {
  return data.map(item => {
    const children = item.children ? formatData(item.children) : undefined;
    return {
      value: item.code,
      label: item.name,
      children,
    };
  });
};

const provinceAndCityData: DataItem[] = formatData(pcC);

const regionData: DataItem[] = formatData(pcaC);

// code转汉字大对象
const codeToText: { [key: string]: string } = {};
pcaC.forEach(province => {
  codeToText[province.code] = province.name;
  province.children.forEach(city => {
    codeToText[city.code] = city.name;
    city.children.forEach(area => {
      codeToText[area.code] = area.name;
    });
  });
});

const pcTextArr: DataItem[] = Object.entries(pc).map(([province, cities]) => ({
  label: province,
  value: province,
  children: cities.map((city: string) => ({
    label: city,
    value: city,
  })),
}));

const pcaTextArr: DataItem[] = Object.entries(pca).map(
  ([province, cities]) => ({
    label: province,
    value: province,
    children: Object.entries(cities).map(([city, areas]) => ({
      label: city,
      value: city,
      children: areas.map((area: string) => ({
        label: area,
        value: area,
      })),
    })),
  })
);

export { provinceAndCityData, pcTextArr, regionData, pcaTextArr, codeToText };
