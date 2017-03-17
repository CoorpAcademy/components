import { configure } from '@kadira/storybook';

function loadStories() {
  require('../storybook');
}

configure(loadStories, module);
