import courseSections from '../../../course-sections/test/fixtures/default';

const {
  props: {sections}
} = courseSections;

export default {
  props: {
    itemType: 'course-section',
    items: sections,
    onDrop: (dragged, dropped) => {
      console.log('foo');
      console.log({dragged, dropped});
    }
  }
};
