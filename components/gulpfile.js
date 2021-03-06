const gulp = require("gulp");
const concat = require("gulp-concat");
const cssFiles = [
  "./src/scss/menu.scss",
  "./src/scss/modal.scss",
  "./src/scss/alert.scss",
  "./src/scss/accordion.scss",
  "./src/scss/slider.scss"
];
const jsFiles = ["./src/js/lip.js", "./src/js/main.js"];
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const del = require("del");
//const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const fileinclude = require("gulp-file-include");

function styles() {
  return gulp
    .src(cssFiles)
    .pipe(sass({ errLogToConsole: true, outputStyle: "compressed" }))
    .on("error", console.error.bind(console))
    .pipe(concat("style.css"))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest("./build/css/"))
    .pipe(browserSync.stream());
}
function scripts() {
  return gulp
    .src(jsFiles)
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./build/js/"))
    .pipe(browserSync.stream());
}
function clean() {
  return del(["build/*"]);
}
function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/scss/**/*.scss", styles);
  gulp.watch("./src/js/**/*.js", scripts);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

gulp.task("fileinclude", function() {
  gulp
    .src(["index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest("./"));
});
gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("del", clean);
gulp.task("watch", watch);
gulp.task("build", gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task("dev", gulp.series("build", "watch"));
