import {makeListModel, listLabels, pageRows} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({
      rows: pageRows.slice(0, 25),
      resultLabel: '25 of 2000 populations',
      hasMore: true,
      moreError: 'The next page could not be loaded. Your current results are kept.'
    }),
    labels: listLabels
  }
};
