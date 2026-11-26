import {makeModel, responsibleLabels} from '../../../../test/helpers/population-responsibles';

export default {
  props: {
    model: makeModel({countLabel: undefined, evaluatedAtLabel: undefined}),
    labels: responsibleLabels
  }
};
