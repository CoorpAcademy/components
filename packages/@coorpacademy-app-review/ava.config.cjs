module.exports = {
  files: ['src/**/*.test*'],
  extensions: ['ts'],
  require: ['ts-node/register'],
  nodeArguments: ['--loader=ts-node/esm', '--experimental-specifier-resolution=node']
};
