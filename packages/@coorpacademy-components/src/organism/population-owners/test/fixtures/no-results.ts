import {makeModel, ownerLabels} from '../../../../test/helpers/population-owners';

export default {
  props: {model: makeModel({query: 'Nobody matches', suggestions: []}), labels: ownerLabels}
};
