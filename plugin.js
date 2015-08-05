'use strict'

var resolveSync = require('resolve').sync
var createTransform = require('./transform')

module.exports = function degreePlugin (browserify, options) {
  browserify.transform(createTransform(options.files.map(resolve)))

  function resolve (file) {
    return resolveSync(file, {
      basedir: browserify.basedir || process.cwd()
    })
  }
}
