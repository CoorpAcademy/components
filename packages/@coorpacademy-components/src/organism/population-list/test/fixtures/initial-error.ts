import {noop} from 'lodash/fp';
import {makeListModel, listLabels} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({
      rows: [],
      resultLabel: undefined,
      evaluatedAtLabel: undefined,
      error: {
        message: 'Populations could not be loaded.',
        retry: {label: 'Try again', onClick: noop}
      }
    }),
    labels: listLabels
  }
};
