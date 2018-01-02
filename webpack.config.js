// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore

    // каталог, где будут храниться все скомпилированные ресурсы
    .setOutputPath('web/build/')

    // публичный путь к каталогу (относительно корневого документа dir вашего проекта)
    .setPublicPath('/build')

    // очистить outputPath dir перед каждым построением
    .cleanupOutputBeforeBuild()

    // будет выводиться, как web/build/app.js
    .addEntry('app', './assets/js/main.js')

    // будет выводиться, как web/build/global.css
    .addStyleEntry('global', './assets/css/global.scss')

    // позволить обработку файлов sass/scss
    .enableSassLoader()

    // позволить приложениям наследования использовать $/jQuery в качестве глобальной переменной
    .autoProvidejQuery()

    // включить в проект React.js
    .enableReactPreset()

    // jQuery
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    // создать хешированные имена файлов (например, app.abc123.css)
    // .enableVersioning()
;

// экспортировать финальную конфигурацию
module.exports = Encore.getWebpackConfig();