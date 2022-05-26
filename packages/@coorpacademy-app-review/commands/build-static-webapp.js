const esbuild = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const cssModulesPlugin = require('esbuild-css-modules-plugin');
const dotenv = require('dotenv');
const {isModuleDeclaration} = require('typescript');

// -----------------------------------------------------------------------------

const PUBLIC = 'public';
const entry = `${PUBLIC}/sandbox.tsx`;

dotenv.config();

// -----------------------------------------------------------------------------

const build = () => {
  console.log('☢️  building', {entry});

  return esbuild.build({
    entryPoints: [entry],
    outfile: `${PUBLIC}/app.min.js`,
    format: 'cjs',
    bundle: true,
    sourcemap: true,
    watch: true,
    plugins: [
      svgrPlugin(),
      cssModulesPlugin({
        cssModulesOption: {
          generateScopedName: '[name]__[local]___[hash:base64:8]'
        }
      })
    ],
    define: {
      'process.env.API_TEST_TOKEN': `'${process.env.API_TEST_TOKEN}'`,
      'process.env.NODE_ENV': '"development"',
      global: 'globalThis'
    }
  });
};

// -----------------------------------------------------------------------------
// binary runner

const isRunner = () => {
  const splitters = process.argv[1].split('/');
  return splitters[splitters.length - 1].indexOf('build') !== -1;
};

if (isRunner()) {
  build().then(() => {
    console.log('✅ success');
    process.exit(0);
  });
}

// -----------------------------------------------------------------------------

module.exports = build;
