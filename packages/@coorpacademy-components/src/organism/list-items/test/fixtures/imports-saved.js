import filesNotSavedItem from '../../../list-item/test/fixtures/files-not-saved';
import savedItem from '../../../list-item/test/fixtures/saved';

const propsFilesNotSavedItem = {...filesNotSavedItem.props, id: 'filesNotSaved'};
const propsSavedItem = {...savedItem.props, id: 'saved'};
const contentItems = [propsSavedItem, propsFilesNotSavedItem];

export default {
  props: {
    title: `${contentItems.length} imports saved`,
    'aria-label': 'aria list',
    buttonLink: {
      type: 'primary',
      label: 'Create new import',
      'aria-label': 'aria button',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    },
    content: {
      items: contentItems,
      type: 'list',
      itemType: 'certification',
      isDraggable: false,
      onDrop: (dragged, dropped) => {
        console.log({dragged, dropped});
      },
      tableHeader: ['Name', 'Upload Date', 'File amount', 'Status']
    }
  }
};
