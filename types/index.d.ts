import { Plugin } from "rollup";
interface Option {
    ext: string[];
}
declare const noBuild: (option: Option) => Plugin;
export default noBuild;
