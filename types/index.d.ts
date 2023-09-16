import { Plugin } from "rollup";
interface Option {
    ext: string[];
}
export declare const noBuild: (option: Option) => Plugin;
export {};
