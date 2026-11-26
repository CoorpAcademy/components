import {noop} from 'lodash/fp';
import {makeListModel, listLabels} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({
      countsError: {
        message: 'Some counts are unavailable. Previously loaded results are kept.',
        retry: {label: 'Retry counts', onClick: noop}
      },
      resultLabel: '5 populations loaded'
    }),
    labels: listLabels
  }
};
