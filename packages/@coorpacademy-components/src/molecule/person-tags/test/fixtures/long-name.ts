import {translate} from '../../../../test/helpers/population-owners';

export default {
  props: {
    translate,
    users: [
      {
        id: 'long',
        name: 'Alexandra Maximiliana de la Tour et du Bois',
        login: 'alexandra.maximiliana.very.long.login@example.invalid',
        current: true
      }
    ]
  }
};
