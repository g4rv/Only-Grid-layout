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
                // Sprite method
                symbol: {
                    //Sprite path
                    sprite: `../svg/sprite/sprite.svg`,

                    //Creates html document with example of sprites
                    // example: true,
                }
            },

            //Removes "width" and "height" properties on svg
            // shape: {
            //     transform: [{
            //         svgo: {
            //             plugins: [{
            //                 removeDimensions: true,
            //             }]
            //         }
            //     }]
            // }
        }))
        .pipe(app.gulp.dest(app.path.build.images))
}