import readyForSavingItem from '../../../list-item/test/fixtures/ready-for-saving';
import totalyFailedItem from '../../../list-item/test/fixtures/totaly-failed';
import partialyFailedItem from '../../../list-item/test/fixtures/partialy-failed';

const propsTotalyFailed = {...totalyFailedItem.props, id: 'totalyFailed'};
const propsPartialyFailed = {...partialyFailedItem.props, id: 'partialyFailed'};
const propsReadyForSavingItem = {...readyForSavingItem.props, id: 'readyForSaving'};
const contentItems = [propsReadyForSavingItem, propsTotalyFailed, propsPartialyFailed];

export default {
  props: {
    title: `${contentItems.length} imports pending`,
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
