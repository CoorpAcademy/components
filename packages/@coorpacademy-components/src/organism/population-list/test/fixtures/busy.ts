import {makeListModel, listLabels} from '../../../../test/helpers/population-list';

export default {
  props: {model: makeListModel({transitioning: true, hasMore: true}), labels: listLabels}
};
