import {makeModel, responsibleLabels} from '../../../../test/helpers/population-responsibles';

export default {
  props: {
    disabled: true,
    model: makeModel({loadMore: {label: 'Load more', onClick: () => undefined}}),
    labels: responsibleLabels
  }
};
