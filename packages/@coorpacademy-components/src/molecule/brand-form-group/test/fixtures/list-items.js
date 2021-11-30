import publishedListItems from '../../../list-items/test/fixtures/published';

const {props} = publishedListItems;

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
