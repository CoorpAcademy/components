import {makeListModel, listLabels, confirmation} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({lifecycleError: 'This population is used by an active assignment.'}),
    labels: listLabels,
    confirmation: {...confirmation, error: 'This population is used by an active assignment.'}
  }
};
