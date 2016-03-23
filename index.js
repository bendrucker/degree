'use strict'

var budo = require('budo')
var defined = require('defined')
var plugin = require('./plugin')
var createDocument = require('./document')

module.exports = function degree (entries, options) {
  if (typeof entries === 'string') entries = [entries]

  options = options || {}
  options.browserify = options.browserify || {}
  options.browserify.plugin = options.browserify.plugin || []

  options.browserify.plugin.push([plugin, {files: entries}])
  options.open = defined(options.open, true)
  options.defaultIndex = createDocument

  return budo(entries, options)
}
