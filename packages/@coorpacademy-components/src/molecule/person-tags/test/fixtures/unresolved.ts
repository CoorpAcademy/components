import {personLabels} from '../../../../test/helpers/population-owners';

export default {
  props: {
    labels: personLabels,
    users: [
      {id: 'unknown', name: 'missing.owner', login: 'missing.owner', status: 'unknown'},
      {id: 'ambiguous', name: 'shared.owner', login: 'shared.owner', status: 'ambiguous'}
    ]
  }
};
