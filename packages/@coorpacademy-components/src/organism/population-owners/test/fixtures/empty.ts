import {makeModel, translate} from '../../../../test/helpers/population-owners';

export default {
  props: {model: makeModel({selected: [], warningCount: 0, selfSelected: false}), translate}
};
