import DragDrop from '../../../../atom/drag-and-drop/test/fixtures/default';
import CheckboxWithTitle from '../../../../atom/checkbox-with-title/test/fixtures/checked';

export default {
  props: {
    checkboxWithTitle: CheckboxWithTitle.props,
    child: {
      ...DragDrop.props,
      childType: 'drag-and-drop-wrapper'
    }
  }
};
