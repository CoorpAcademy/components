import {makeListModel, listLabels, rows} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({rows: [rows[0]], search: 'Finance', resultLabel: '1 of 1 population'}),
    labels: listLabels
  }
};
