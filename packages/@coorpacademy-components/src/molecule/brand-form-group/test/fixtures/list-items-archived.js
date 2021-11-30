import archivedListItems from '../../../list-items/test/fixtures/archived';

const {props} = archivedListItems;

export default {
  props: {
    fields: [
      {
        ...props,
        type: 'listItems'
      }
    ]
  }
};
