import firstdDragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/default';
import secondDragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/clean-and-modified';
import checkBoxTitle from '../../../../atom/checkbox-with-title/test/fixtures/checked';

export default {
  props: {
    checkBoxTitle: {...checkBoxTitle.props, title: 'Create diploma'},
    list: [firstdDragAndDrop.props, secondDragAndDrop.props]
  }
};
