import {translate} from '../../../../test/helpers/population-owners';

export default {
  props: {
    translate,
    users: [
      {id: 'unknown', name: 'missing.owner', login: 'missing.owner', status: 'unknown'},
      {id: 'ambiguous', name: 'shared.owner', login: 'shared.owner', status: 'ambiguous'}
    ]
  }
};
