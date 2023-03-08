import inputText from '../../../../atom/input-text-with-title/test/fixtures/error';
import CheckboxWithTitle from '../../../../atom/checkbox-with-title/test/fixtures/checked';
import PDFDragAndDrop from '../../../../atom/image-upload/test/fixtures/pdf';
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
          list: [{...PDFDragAndDrop.props}],
          childType: 'drag-and-drop-wrapper',
          title: 'Create badge'
        },
        checkboxWithTitle: {title: 'Create badge', checked: true}
      },
      {
        child: {...doubleDragAndDrop.props, childType: 'drag-and-drop-wrapper'},
        checkboxWithTitle: {title: 'Create diploma', checked: true}
      }
    ]
  }
};
