import { Plugin } from "rollup";
interface Option {
  ext: string[];
}
export const noBuild: (option: Option) => Plugin = (option) => {
  return {
    name: "null",
    resolveId(source, importer) {
      const { ext } = option;

      if (ext.some((e) => source.endsWith(e))) {
        return false;
      }
    },
  };
};
