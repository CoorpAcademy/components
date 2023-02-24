import archivedItem from '../../../list-item/test/fixtures/archived';

const ids = ['1', '2', '3'];
const listeItems = ids.map(id => {
  return {
    ...archivedItem.props,
    id
  };
});

export default {
  props: {
    title: `${listeItems.length} custom playlists`,
    'aria-label': 'aria list',
    buttonLink: {
      type: 'primary',
      label: 'Create custom playlist',
      'aria-label': 'aria button',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    },
    content: {items: listeItems, type: 'list'}
  }
};
