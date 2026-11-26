import {makeListModel, listLabels, pageRows} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({
      rows: pageRows.slice(0, 25),
      resultLabel: '25 of 2000 populations',
      hasMore: true
    }),
    labels: listLabels
  }
};
