'use strict';

const cliCommandInit = require('../lib');
const assert = require('assert').strict;

assert.strictEqual(cliCommandInit(), 'Hello from cliCommandInit');
console.info('cliCommandInit tests passed');
