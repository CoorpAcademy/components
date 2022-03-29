import firstdDragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/default';
import secondDragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/clean-and-modified';
import checkBoxTitle from '../../../../atom/checkbox-with-title/test/fixtures/checked';
import dragAndDrop from '../../../../atom/image-upload/test/fixtures/default';

export default {
  props: {
    checkBoxTitle: {...checkBoxTitle.props, title: 'Create diploma'},
    list: [
      {...dragAndDrop.props, ...firstdDragAndDrop.props, title: 'Upload Company logo'},
      {...dragAndDrop.props, ...secondDragAndDrop.props, title: 'Upload digital signature'}
    ]
  }
};
