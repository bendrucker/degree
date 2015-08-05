'use strict'

var thermometer = require('thermometer')
var window = require('global/window')

var store = window.degree = {}

module.exports = function renderComponent (Component) {
  return thermometer.createComponent(Component, function (state, element, done) {
    var name = Component.name
    if (name) {
      store[name] = {
        state: state,
        element: element,
        destroy: done
      }
    }
  })
}
