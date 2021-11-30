import publishedListItems from '../../../../organism/list-items/test/fixtures/published';

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
