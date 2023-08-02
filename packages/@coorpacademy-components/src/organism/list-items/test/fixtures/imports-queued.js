import uploadInProgressItem from '../../../list-item/test/fixtures/upload-in-progress';

const uploadInprogressProps = {...uploadInProgressItem.props, id: 'uploadInprogress'};
const contentItems = [uploadInprogressProps];
export default {
  props: {
    title: `${contentItems.length} imports queued`,
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
