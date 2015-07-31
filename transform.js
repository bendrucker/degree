'use strict'

var path = require('path')
var transformify = require('transformify')
var requireDeps = require('require-deps')

module.exports = function createTransform (files) {
  return function degreeTransform (file) {
    if (~files.indexOf(file)) return transformify(addRender)()
    return transformify(identity)()
  }
}

var create = requireDeps(path.resolve(__dirname, 'create.js')).replace(';', '')

function addRender (code) {
  return code + '\n\n' + create + '(module.exports)'
}

function identity (code) {
  return code
}

