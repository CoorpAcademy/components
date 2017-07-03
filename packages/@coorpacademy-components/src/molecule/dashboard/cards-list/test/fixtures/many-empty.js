export default {
  props: {
    title: 'Most Recent',
    cards: [null, undefined, undefined, null, null, null, undefined],
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    }
  }
};
