import {makeModel, translate} from '../../../../test/helpers/population-owners';

export default {
  props: {model: makeModel({query: 'Morgan', error: true, resolutionError: true}), translate}
};
