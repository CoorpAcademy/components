module.exports = {
  files: ['src/**/*.test*'],
  typescript: {
    rewritePaths: {
      'src/': 'es/'
    },
    compile: false
  }
};
