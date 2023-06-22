import DragDrop from '../../../../atom/drag-and-drop/test/fixtures/default';

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
