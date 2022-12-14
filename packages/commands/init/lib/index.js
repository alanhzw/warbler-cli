'use strict';

// init 命令
function initCommand(...argv) {
  const [projectName, , , config] = argv;
  console.log('🚀🚀 ~ config', config);
  console.log('🚀🚀 ~ projectName', projectName);
}

module.exports = initCommand;
