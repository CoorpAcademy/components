import firstdDragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/default';
import checkBoxTitle from '../../../../atom/checkbox-with-title/test/fixtures/checked';

export default {
  props: {
    checkBoxTitle: {...checkBoxTitle.props, title: 'Create badge'},
    list: [firstdDragAndDrop.props]
  }
};
