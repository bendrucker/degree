'use strict'

var budo = require('budo')
var defined = require('defined')
var plugin = require('./plugin')

module.exports = function degree (entries, options) {
  if (typeof entries === 'string') entries = [entries]
  options = options || {}
  options.plugin = options.plugin || []
  options.plugin.push([plugin, {files: entries}])
  options.open = defined(options.open, true)
  return budo(entries, options)
}
