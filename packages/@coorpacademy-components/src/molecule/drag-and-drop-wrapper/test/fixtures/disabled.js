import firstdDragAndDrop from '../../../../atom/image-upload/test/fixtures/default';

export default {
  props: {
    list: [{...firstdDragAndDrop.props, title: 'Add a badge', disabled: true}]
  }
};
