#!/usr/bin/env node

'use strict'

var meow = require('meow')
var extend = require('xtend')
var degree = require('./')

var cli = meow({
  help: [
    'Usage',
    '  degree [entries...]'
  ]
})

var entries = cli.input
if (!entries.length) throw new Error('entries are required')

degree(entries, extend(cli.flags, {
  stream: process.stdout,
  browserify: {
    plugin: cli.flags.plugin ? [cli.flags.plugin] : undefined
  }
}))
