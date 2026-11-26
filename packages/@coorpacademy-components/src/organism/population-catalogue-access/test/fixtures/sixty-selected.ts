import {map} from 'lodash/fp';
import {
  catalogueLabels,
  cataloguePlaylists,
  makeModel,
  makeSelection
} from '../../../../test/helpers/population-catalogue-access';

export default {
  props: {
    model: makeModel({selection: makeSelection(map('id', cataloguePlaylists))}),
    labels: catalogueLabels
  }
};
