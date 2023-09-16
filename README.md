# rollup-plugin-null

在某些特定情况下，打包的时候不需要对引入的文件做任何处理。

# 使用

```
import nullImport from "rollup-plugin-null";

plugins: [
    nullImport({
      ext: [".less", ".css"],
    }),
]
```
