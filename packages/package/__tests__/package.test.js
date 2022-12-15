'use strict';

const package = require('..');
const assert = require('assert').strict;

assert.strictEqual(package(), 'Hello from package');
console.info("package tests passed");
