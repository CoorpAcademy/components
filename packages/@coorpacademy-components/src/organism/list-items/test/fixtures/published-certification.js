import publishedItem from '../../../list-item/test/fixtures/published';
import revisedItem from '../../../list-item/test/fixtures/revised';

const propsRevised = revisedItem.props;

const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const listePublishedItems = ids.map(id => {
  return {
    ...publishedItem.props,
    id
  };
});

export default {
  props: {
    title: `${listePublishedItems.length + 1} certifications`,
    'aria-label': 'aria list',
    buttonLink: {
      type: 'primary',
      label: 'Create certification',
      'aria-label': 'aria button',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    },
    items: [...listePublishedItems, propsRevised]
  }
};
