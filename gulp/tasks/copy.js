const ignore = () => {
    return [
        "#src/assets/**/*.*",

        // Excluded folders
        "!#src/assets/scss/**",
        "!#src/assets/svgicons/**",
    ]
}

export const copy = () => {
    return app.gulp.src(ignore())
    // return app.gulp.src(app.path.src.assets)
        .pipe(app.gulp.dest(app.path.build.assets));
}