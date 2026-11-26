import {makeModel, responsibleLabels} from '../../../../test/helpers/population-responsibles';

export default {
  props: {
    model: makeModel({
      error: {
        message: 'Refresh failed. Previously loaded managers are shown.',
        retry: {label: 'Try again', onClick: () => undefined}
      }
    }),
    labels: responsibleLabels
  }
};
