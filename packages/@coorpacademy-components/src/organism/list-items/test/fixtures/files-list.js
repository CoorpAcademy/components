import file from '../../../list-item/test/fixtures/file';

const ids_ = Array.from({length: 12}, (_, index) => (index + 1).toString());
const listeItems = ids_.map(id => {
  return {
    ...file.props,
    id
  };
});

export default {
  props: {
    title: `${listeItems.length} files to upload`,
    'aria-label': 'aria list',
    buttonLink: {
      type: 'text',
      label: 'Remove all',
      'aria-label': 'aria button',
      'data-name': 'default-button',
      icon: {
        position: 'left',
        type: 'close'
      },
      onClick: () => console.log('click')
    },
    content: {items: listeItems, type: 'list'}
  }
};
