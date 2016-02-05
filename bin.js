#!/usr/bin/env node

'use strict'

var open = require('opn')
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

degree(entries, extend(cli.flags, {stream: process.stdout}))
  .on('connect', function (server) {
    var uri = server.uri
    console.log('Server running at', uri)
    open(uri)
  })
