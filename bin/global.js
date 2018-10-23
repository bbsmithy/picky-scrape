#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);

// Retrieve the first argument
var URL = args[0];
var SELECTOR = args[1];
var ELEMENT_INDEX = args[2];
var FILE_OUTPUT = args[3];

var pickyScrape = require('../lib/index.js');

pickyScrape.start(URL, SELECTOR, FILE_OUTPUT)
