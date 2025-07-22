import ExploreSections from '../../../setup-sections/test/fixtures/explore';

const {props} = ExploreSections;

export default {
  props: {
    title: 'Explore',
    subtitle: 'Configure content sections for the exploration page',
    fields: [
      {
        ...props,
        type: 'sections'
      }
    ]
  }
};
