module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        singleRun: true,

        preprocessors: {
            './src/templates/template.html': ['ng-html2js']
        },

        files: [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'src/js/offCanvasMenu.module.js',
        'src/js/*.js',
        'src/templates/template.html',
        'tests/*.js'
        ],

        ngHtml2JsPreprocessor: {
          stripPrefix: 'src/templates/',
          moduleName: 'offCanvasMenuTemplate'
      },

      reporters: ['mocha']
  })
}