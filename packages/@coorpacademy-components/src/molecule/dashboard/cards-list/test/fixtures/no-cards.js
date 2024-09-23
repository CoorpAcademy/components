export default {
  props: {
    title: 'No cards',
    cards: [],
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    },
    type: 'learningPrioritiesCards'
  }
};
