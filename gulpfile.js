"use strict";

const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webpack = require("webpack-stream");

function buildStyles(cb) {
  return src("./assets/src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./assets/dist/css"));
  cb();
}
function buildScripts(cb) {
  src("./assets/src/js/main.js").pipe(webpack()).pipe(dest("./assets/dist/js"));
  cb();
}
function watchFiles(cb) {
  watch(
    ["./assets/src/scss/**/*.scss", ".assets/src/js/**/*.js"],
    parallel(buildStyles, buildScripts)
  );
  cb();
}

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.watch = watchFiles;
