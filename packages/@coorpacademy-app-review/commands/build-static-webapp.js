const esbuild = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const cssModulesPlugin = require('esbuild-css-modules-plugin');
const postcssValuesReplace = require('postcss-modules-values-replace');
const dotenv = require('dotenv');

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
    format: 'iife',
    bundle: true,
    sourcemap: true,
    watch: true,
    plugins: [
      svgrPlugin(),
      cssModulesPlugin({
        filter: /(\.modules?)?\.css$/,
        postcssPlugins: [postcssValuesReplace()],
        cssModulesOption: {
          generateScopedName: '[name]__[local]___[hash:base64:8]'
        }
      })
    ],
    define: {
      'process.env.API_TEST_TOKEN': `'${process.env.API_TEST_TOKEN}'`,
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
      'process.env.SERVICES': `'${process.env.SERVICES}'`,
      global: 'globalThis'
    }
  });
};

// -----------------------------------------------------------------------------
// binary runner

const isRunner = () => {
  const splitters = process.argv[1].split('/');
  return splitters[splitters.length - 1].includes('build');
};

if (isRunner()) {
  return build().then(() => {
    console.log('✅ success');
    return process.exit(0);
  });
}

// -----------------------------------------------------------------------------

module.exports = build;
