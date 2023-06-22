import DragDrop from '../../../drag-and-drop-wrapper/test/fixtures/default';

import defaultFixtures from './default';

export default {
  props: {
    ...defaultFixtures.props,
    child: {
      ...DragDrop.props,
      childType: 'drag-and-drop-wrapper'
    }
  }
};
