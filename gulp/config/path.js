import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = rootFolder;
const srcFolder = `./#src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        assets: `${buildFolder}/assets/`,
        css: `${buildFolder}/assets/css/`,
        js: `${buildFolder}/assets/js/`,
        images: `${buildFolder}/assets/img/`,
        fonts: `${buildFolder}/assets/fonts/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
        scss: `${srcFolder}/assets/scss/style.scss`,
        js: `${srcFolder}/assets/js/script.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        svgicons: `${srcFolder}/assets/img/svg/*.svg`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        js: `${srcFolder}/assets/js/**/*.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `` // FTP servcer dest folder
}