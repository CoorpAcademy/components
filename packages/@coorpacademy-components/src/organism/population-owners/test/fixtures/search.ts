import {makeModel, people, translate} from '../../../../test/helpers/population-owners';

export default {
  props: {
    model: makeModel({
      query: 'Alex',
      suggestions: [people[0]],
      selected: [],
      warningCount: 0,
      selfSelected: false
    }),
    translate
  }
};
