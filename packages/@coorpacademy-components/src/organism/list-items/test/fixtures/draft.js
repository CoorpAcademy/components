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
    items: listeItems
  }
};
