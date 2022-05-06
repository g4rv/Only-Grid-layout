import svgSprite from "gulp-svg-sprite";

export const getSvgSprite = () => {
    return app.gulp.src(app.path.src.svgicons, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    // Create page with icons
                    example: true,
                }
            },
        }))
        .pipe(app.gulp.dest(app.path.build.images))
}