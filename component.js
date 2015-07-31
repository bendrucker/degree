'use strict'

var Observ = require('observ')
var h = require('virtual-dom/h')

module.exports = Component

function Component () {
  return Observ({
    message: 'Hello!'
  })
}

Component.render = function render (state) {
  return h('h1', state.message)
}
