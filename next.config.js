const path = require('path');

const sassOptions = {
  includePaths: [path.join(__dirname, 'styles')]
};

module.exports = (phase, { defaultConfig }) => {
  return {
    sassOptions,
  };
};
