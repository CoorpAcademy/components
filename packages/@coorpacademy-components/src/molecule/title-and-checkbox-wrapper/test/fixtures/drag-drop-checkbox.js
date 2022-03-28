import DragDrop from '../../../drag-and-drop-wrapper/test/fixtures/two-drag-and-drops';
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
