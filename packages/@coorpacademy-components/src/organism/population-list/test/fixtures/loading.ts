import {makeListModel, listLabels} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({
      rows: [],
      loading: true,
      resultLabel: undefined,
      evaluatedAtLabel: undefined
    }),
    labels: listLabels
  }
};
