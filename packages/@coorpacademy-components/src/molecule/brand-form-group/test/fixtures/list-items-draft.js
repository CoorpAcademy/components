import draftListItems from '../../../list-items/test/fixtures/draft';

const {props} = draftListItems;

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
