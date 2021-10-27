const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const cssWrap = require('gulp-css-wrap');

// css文件还保持压缩状态
gulp.task('css-wrap', () => gulp.src('src/themes/red-theme.css')/* 找需要添加命名空间的css文件，支持正则表达式 */
  .pipe(cssWrap({
    selector: '.red-theme', /* 添加的命名空间 */
  }))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist'))); /* 存放的目录 */

// css文件不保持压缩状态
// gulp.task('css-wrap', () => gulp.src('src/themes/red-theme.css') /* 找需要添加命名空间的css文件，支持正则表达式 */
//   .pipe(cssWrap({ selector: '.red-theme' })) /* 添加的命名空间 */
//   .pipe(gulp.dest('dist'))); /* 存放的目录 */

// 命令行执行gulp css-wrap即可得到添加好命名空间的css文件
