import firstdDragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/default';
import secondDragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/with-children';
import checkBoxTitle from '../../../../atom/checkbox-with-title/test/fixtures/checked';

export default {
  props: {
    checkBoxTitle: checkBoxTitle.props,
    list: [firstdDragAndDrop.props, secondDragAndDrop.props]
  }
};
