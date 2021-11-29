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
    items: listeItems
  }
};
