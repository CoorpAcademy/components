## webpack config use
```
const path = require('path');
const {webpackConfig} = require('@coorpacademy/components-bundler');

const input = path.join(__dirname, 'src/app');
const output = path.join(__dirname, 'dist');

module.exports = webpackConfig('Backoffice', input, output);
```
