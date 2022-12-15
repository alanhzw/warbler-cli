'use strict';

const Package = require('@warbler-fe/cli-package');

// init 命令
async function initCommand(...argv) {
  const [, , , config] = argv;
  const pkg = new Package({
    packageName: 'pkg-dir',
    packageVersion: 'latest',
    config,
  });
  await pkg.exists();
  console.log('⚠️⚠️⚠️ ~ ', pkg.packageVersion);

  // await pkg.install();
  // await pkg.update();
}

module.exports = initCommand;
