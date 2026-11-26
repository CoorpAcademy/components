import {makeListModel, listLabels, archivedRows} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({rows: archivedRows, resultLabel: '5 of 5 archived populations'}),
    labels: listLabels
  }
};
