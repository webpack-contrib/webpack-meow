// if (Array.isArray(options) && argv["config-name"]) {
//   const namedOptions = options.filter(function(opt) {
//     return opt.name === argv["config-name"];
//   });
//   if (namedOptions.length === 0) {
//     console.error(
//       "Configuration with name '" + argv["config-name"] + "' was not found."
//     );
//     process.exit(-1); // eslint-disable-line
//   } else if (namedOptions.length === 1) {
//     return processConfiguredOptions(namedOptions[0]);
//   }
//   options = namedOptions;
// }

const merge = require('merge-options');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  apply(argv, options) {
    // eslint-disable-next-line no-param-reassign
    options = merge({ mode: argv.mode }, options);
  },

  flags: {
    // TODO: handle config
    config: {
      desc: 'Path to the config file',
      type: 'string',
    },
    // TODO: handle config-name
    'config-name': {
      desc: 'Name of the config to use',
      type: 'string',
    },
    'config-register': {
      alias: 'r',
      desc:
        'Preload one or more modules before loading the webpack configuration',
      deprecated: '--require',
      type: ['string', 'array'],
    },
    mode: {
      // TODO: handle choices
      choices: ['development', 'production'],
      desc: 'Mode to use',
      type: 'string',
    },
  },

  name: 'Configuration File',
};