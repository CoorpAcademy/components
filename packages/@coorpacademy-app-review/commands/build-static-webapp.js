import esbuild from 'esbuild';
import svgrPlugin from 'esbuild-plugin-svgr';
import cssModulesPlugin from 'esbuild-css-modules-plugin';
import dotenv from 'dotenv';

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

export default build;
