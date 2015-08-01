#!/usr/bin/env node

'use strict'

var open = require('opn')
var meow = require('meow')
var degree = require('./')

var cli = meow({
  help: [
    'Usage',
    '  degree [entries...]'
  ]
})

var entries = cli.input
if (!entries.length) throw new Error('entries are required')

degree(entries, cli.flags)
  .on('connect', function (server) {
    var uri = server.uri
    console.log('Server running at', uri)
    open(uri)
  })
