// Generated by dts-bundle-generator v7.2.0

export interface DataItem {
	value: string | number;
	label: string;
	children?: DataItem[];
	disabled?: boolean;
	leaf?: boolean;
}
export declare const provinceAndCityData: DataItem[];
export declare const regionData: DataItem[];
export declare const codeToText: {
	[key: string]: string;
};
export declare const pcTextArr: DataItem[];
export declare const pcaTextArr: DataItem[];

export {};
