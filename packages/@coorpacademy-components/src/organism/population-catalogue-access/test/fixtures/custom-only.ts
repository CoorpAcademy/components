import {
  catalogueLabels,
  makeChoices,
  makeModel
} from '../../../../test/helpers/population-catalogue-access';

export default {
  props: {
    model: makeModel({choices: makeChoices('custom'), selection: undefined}),
    labels: catalogueLabels
  }
};
