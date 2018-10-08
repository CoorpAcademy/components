import team from '../../common-fixtures/waiting-answer-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'race',
    slide: null,
    team,
    blur: true,
    towers: fiveTowers,
    goal: 8,
    cta: null,
    victors: []
  }
};
