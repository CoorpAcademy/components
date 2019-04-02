// import {addParameters, configure} from '@storybook/react';

// function loadStories() {
//   const req = require.context('../src/atom/button', true, /test\/fixtures\/.*.js$/);

//   console.log(req);
//   req.keys().forEach(req);
// }

// configure(loadStories, module);

function loadStories() {
  require('../storybook');
}

configure(loadStories, module);
