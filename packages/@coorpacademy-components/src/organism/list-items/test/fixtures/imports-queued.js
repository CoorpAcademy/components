import uploadInProgressItem from '../../../list-item/test/fixtures/upload-in-progress';

const uploadInprogressProps = {...uploadInProgressItem.props, id: 'uploadInprogress'};
const contentItems = [uploadInprogressProps];
export default {
  props: {
    title: `${contentItems.length} imports queued`,
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
