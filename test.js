'use strict'

var test = require('tape')
var browserify = require('browserify')
var path = require('path')
var vm = require('vm')
var window = require('global/window')
var document = require('global/document')
var assign = require('xtend/mutable')
var degree = require('./')

test('plugin', function (t) {
  t.plan(5)
  var componentPath = path.resolve(__dirname, './component.js')
  browserify()
    .add(componentPath)
    .plugin(path.resolve(__dirname, './plugin.js'), {
      files: [componentPath]
    })
    .bundle(function (err, code) {
      require('fs').writeFileSync('bundle.js', code)
      if (err) return t.end(err)

      var context = assign(vm.createContext(window), {
        document: document,
        navigator: {
          userAgent: '',
          mimeTypes: ''
        },
        window: window
      })
      vm.runInContext(code, context)

      t.ok(context.degree)

      var component = context.degree.Component
      t.ok(component)
      t.equal(component.element.childNodes[0].data, 'Hello!')
      t.equal(typeof component.state, 'function')

      component.state.set({
        message: 'New Message!'
      })
      // raf managed to get in a race condition where afterRender runs before
      // main-loop gets to run
      setTimeout(function afterRender () {
        t.equal(component.element.childNodes[0].data, 'New Message!')
      }, 100)
    })
})
