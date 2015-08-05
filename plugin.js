'use strict'

var createTransform = require('./transform')

module.exports = function degreePlugin (browserify, options) {
  browserify.transform(createTransform(options.files.map(resolve)))

  function resolve (file) {
    return require.resolve(browserify.basedir || process.cwd(), file)
  }
}
