import {makeModel, responsibleLabels} from '../../../../test/helpers/population-responsibles';

export default {
  props: {model: makeModel({users: [], countLabel: '0 managers'}), labels: responsibleLabels}
};
