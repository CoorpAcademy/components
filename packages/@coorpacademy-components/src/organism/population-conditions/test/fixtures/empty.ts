import {labels, makeModel, summaryLabels} from '../../../../test/helpers/population-conditions';

export default {
  props: {labels, model: makeModel({groups: [], summary: {labels: summaryLabels, groups: []}})}
};
