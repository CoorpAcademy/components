import draftItem from '../../../list-item/test/fixtures/draft';

const ids = ['1', '2', '3'];
const listeItems = ids.map(id => {
  return {
    ...draftItem.props,
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
    items: listeItems
  }
};
