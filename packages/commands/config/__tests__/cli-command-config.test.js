'use strict';

const cliCommandConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(cliCommandConfig(), 'Hello from cliCommandConfig');
console.info("cliCommandConfig tests passed");
