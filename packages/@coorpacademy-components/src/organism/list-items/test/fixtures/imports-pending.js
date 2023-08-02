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
      label: 'Create certification',
      'aria-label': 'aria button',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    },
    selectMultiple: {
      theme: 'coorpmanager',
      placeholder: 'Select language(s)',
      title: 'Population',
      description: 'You should select a language',
      disabled: false,
      error: '',
      options: [
        {
          value: 'pop-1',
          name: 'Capgemini',
          selected: true
        },
        {
          value: 'pop-2',
          name: 'Student',
          selected: false
        },
        {
          value: 'pop-3',
          name: 'Student Edhec',
          selected: false
        }
      ],
      onChange: value => console.log('onChange', value),
      onError: () => true
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
