import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-xv-webp-html";
import versionNumber from "gulp-version-number";
import formatHtml from 'gulp-format-html';

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
        .pipe(app.plugins.replace(/@js\//g, 'assets/js/'))
        .pipe(app.plugins.replace(/@css\//g, 'assets/css/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg([
                    '.jpg', 
                    '.png', 
                    '.gif', 
                    '.jpeg', 
                    '.avif', 
                    '.tif'
                ])
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'kay': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                formatHtml({
                    indent_size: 4,
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
}