import {personLabels} from '../../../../test/helpers/population-owners';

export default {
  props: {
    labels: personLabels,
    users: [
      {
        id: 'long',
        status: 'ok',
        name: 'Alexandra Maximiliana de la Tour et du Bois',
        login: 'alexandra.maximiliana.very.long.login@example.invalid',
        current: true
      }
    ]
  }
};
