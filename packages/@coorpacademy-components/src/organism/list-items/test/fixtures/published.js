import publishedItem from '../../../list-item/test/fixtures/published';
import revisedItem from '../../../list-item/test/fixtures/revised';

const propsRevised = revisedItem.props;

const ids = ['1', '2', '3'];
const listePublishedItems = ids.map(id => {
  return {
    ...publishedItem.props,
    id
  };
});

export default {
  props: {
    items: [...listePublishedItems, propsRevised]
  }
};
