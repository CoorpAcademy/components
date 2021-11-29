import publishedItem from '../../../list-item/test/fixtures/published';
import draftItem from '../../../list-item/test/fixtures/draft';
import archivedItem from '../../../list-item/test/fixtures/archived';
import revisedItem from '../../../list-item/test/fixtures/revised';

const propsPublished = publishedItem.props;
const propsDraft = draftItem.props;
const propsArchived = archivedItem.props;
const propsRevised = revisedItem.props;

export default {
  props: {
    items: [propsPublished, propsDraft, propsArchived, propsRevised]
  }
};
