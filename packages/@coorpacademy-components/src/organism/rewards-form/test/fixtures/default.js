import inputText from '../../../../atom/input-text-with-title/test/fixtures/error';
import CheckboxWithTitle from '../../../../atom/checkbox-with-title/test/fixtures/checked';
import singleDragAndDrop from '../../../../molecule/drag-and-drop-wrapper/test/fixtures/default';
import doubleDragAndDrop from '../../../../molecule/drag-and-drop-wrapper/test/fixtures/two-drag-and-drops';

export default {
  props: {
    items: [
      {
        child: {...inputText.props, childType: 'input-text', title: undefined},
        checkboxWithTitle: CheckboxWithTitle.props
      },
      {
        child: {
          ...singleDragAndDrop.props,
          childType: 'drag-and-drop-wrapper',
          title: 'Create badge'
        },
        sectionTitle: {title: 'Create badge'}
      },
      {
        child: {...doubleDragAndDrop.props, childType: 'drag-and-drop-wrapper'},
        sectionTitle: {title: 'Create diploma'}
      }
    ]
  }
};
