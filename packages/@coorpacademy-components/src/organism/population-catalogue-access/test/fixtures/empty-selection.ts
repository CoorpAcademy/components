import {
  catalogueLabels,
  makeModel,
  makeSelection
} from '../../../../test/helpers/population-catalogue-access';

export default {props: {model: makeModel({selection: makeSelection([])}), labels: catalogueLabels}};
