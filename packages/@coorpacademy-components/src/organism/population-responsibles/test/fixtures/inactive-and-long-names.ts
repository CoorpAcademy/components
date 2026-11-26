import {
  makeModel,
  responsibleLabels,
  managers
} from '../../../../test/helpers/population-responsibles';

export default {
  props: {
    model: makeModel({
      users: [
        managers[0],
        {id: 'inactive', name: 'Inactive Manager', login: 'inactive.manager', status: 'ok'},
        {
          id: 'long',
          name: 'Alexandria Catherine Montgomery-Sinclair de la Roche',
          login: 'alexandria.catherine.montgomery.sinclair.de.la.roche',
          status: 'ok'
        }
      ],
      countLabel: '3 managers'
    }),
    labels: responsibleLabels
  }
};
