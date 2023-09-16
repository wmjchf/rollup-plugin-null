/* eslint-disable @typescript-eslint/no-var-requires */
import gulp from "gulp";

import { deleteAsync } from "del";

function copyType() {
  return gulp.src("dist/es/**/*.d.ts").pipe(gulp.dest(`types`));
}

function delType() {
  return deleteAsync(["dist/es/**/*.d.ts", "dist/cjs/**/*.d.ts"]);
}

const generateType = gulp.series(copyType, delType);

const build = gulp.parallel(generateType);

export default build;
