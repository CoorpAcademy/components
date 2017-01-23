import { configure } from '@kadira/storybook';

function loadStories() {
  require('../sthories');
}

configure(loadStories, module);
