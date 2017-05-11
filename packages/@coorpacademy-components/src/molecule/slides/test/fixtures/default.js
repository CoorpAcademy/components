import Cta from '../../../../atom/cta/test/fixtures/default';

const {props} = Cta;

export default {
  props: {
    progression: {
      current: 2,
      total: 6
    },
    question: 'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    cta: props
  }
};
