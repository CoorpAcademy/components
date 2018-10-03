import team from '../../common-fixtures/waiting-answer-team';
import noTower from '../../common-fixtures/no-tower';

export default {
  props: {
    start: true,
    blur: false,
    slide: null,
    view: 'race',
    team,
    towers: noTower,
    goal: 8,
    cta: null
  }
};
