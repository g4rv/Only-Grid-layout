import fs, { appendFile } from "fs";
import fonter from "gulp-fonter"
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
    // looking for .otf
    return app.gulp.src(`${app.path.srcFolder}/assets/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        // Converting .otf into .ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        // Upload to dist folder
        .pipe(app.gulp.dest(`${app.path.srcFolder}/assets/fonts/`))
}
export const ttfToWoff = () => {
    // looking for .ttf
    return app.gulp.src(`${app.path.srcFolder}/assets/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        // Converting .otf into .woff
        .pipe(fonter({
            formats: ['woff']
        }))
        // Uploading in resault folder
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        // looking for .ttf
        .pipe(app.gulp.src(`${app.path.srcFolder}/assets/fonts/*.ttf`))
        // Converting .ttf into .woff2
        .pipe(ttf2woff2())
        // Uploading in resault folder
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}
export const fontsStyle = () => {
    // fonts connect style file
    let fontsFile = `${app.path.srcFolder}/assets/scss/_fonts.scss`;
    // checking for existing fonts
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            // checking for existing stylesheet
            if (!fs.existsSync(fontsFile)) {
                // Creates a new file if not exists
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) {
                    // Adding fonts to stylesheet
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile, `@font-face{\n\tfont-family: "${fontName}";\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                console.log(`🎈🎈🎈File scss/fonts.scss already exists. Delete the file to update.🎈🎈🎈`)
            }
        }
    })

    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() {}
}