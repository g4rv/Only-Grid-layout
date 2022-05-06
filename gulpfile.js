// main module
import gulp from "gulp";
// import path
import { path } from "./gulp/config/path.js"
// import plugins
import { plugins } from "./gulp/config/plugins.js";

// global vars
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { getSvgSprite } from "./gulp/tasks/getSvgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// Watcher
// to watch in FTP mode change "process" to gulp.series("process", ftp) 
// Example: 
// gulp.watch(path.watch.html, html); => gulp.watch(path.watch.html, gulp.series(html, ftp));
const watcher = () => {
    gulp.watch(path.watch.assets, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Fonts processing
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

// main tasks
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Scenario build
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// exported scenarios
export { dev }; // npm run dev - developer mode
export { build }; // npm run build - production mode
export { deployZIP }; // npm run zip - creates .zip
export { deployFTP }; // npm run ftp - connects to FTP server
export { getSvgSprite }; // npm run getSvgSprite - creates svgSprite

// Default scenario
gulp.task('default', dev);