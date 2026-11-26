import {responsibleLabels} from '../../../../test/helpers/population-responsibles';

export default {
  props: {
    model: {
      users: [],
      error: {
        message: 'Managers could not be loaded.',
        retry: {label: 'Try again', onClick: () => undefined}
      }
    },
    labels: responsibleLabels
  }
};
