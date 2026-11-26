import {makeListModel, listLabels} from '../../../../test/helpers/population-list';

export default {
  props: {model: makeListModel({rows: [], resultLabel: '0 of 0 populations'}), labels: listLabels}
};
