import listItems from '../../../../organism/list-items/test/fixtures/published';

const {
  props: {
    content: {items}
  }
} = listItems;

export default {
  props: {
    itemType: 'list-item',
    items,
    onDrop: (dragged, dropped) => {
      console.log('foo');
      console.log({dragged, dropped});
    }
  }
};
