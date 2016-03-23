'use strict'

var hyperstream = require('hyperstream')
var html = require('simple-html-index')
var viewport = require('meta-viewport-ios-9/string')

module.exports = createDocument

function createDocument (options) {
  var htmls = html(options)
  var hs = hyperstream({
    head: {
      _appendHtml: `<meta name="viewport" content="${viewport}" />`
    }
  })

  return htmls.pipe(hs)
}
