import {noop} from 'lodash/fp';
import {makeListModel, listLabels, rows} from '../../../../test/helpers/population-list';
import {PopulationRow} from '../../types';

const analytics: PopulationRow = {
  ...rows[4],
  memberLabel: '4 learners',
  conditionGroups: [
    {
      id: 'finance-france',
      rows: [
        {
          id: 'department',
          prefix: 'Learners whose',
          field: 'Department',
          comparison: 'is',
          values: [{id: 'finance', label: 'Finance'}]
        },
        {
          id: 'country',
          prefix: 'whose',
          field: 'Country',
          comparison: 'is',
          values: [{id: 'france', label: 'France'}]
        }
      ]
    },
    {
      id: 'sso',
      rows: [
        {
          id: 'provider',
          prefix: 'Learners whose',
          field: 'Account provider',
          comparison: 'is',
          values: [{id: 'sso', label: 'Sso'}]
        }
      ]
    }
  ],
  ownerInformation: {
    label: '3 owners',
    ariaLabel: 'Owners of Onboarding progress',
    deactivatedLegend:
      'The crossed-out eye marks a deactivated account. Remove it manually to end its ownership.',
    items: [
      {id: 'alex', name: 'Alex Martin', login: 'alex.martin', status: 'ok', onRemove: noop},
      {id: 'sam', name: 'Sam Taylor', login: 'sam.taylor', status: 'deactivated', onRemove: noop},
      {
        id: 'eric',
        name: 'Eric Sampaio',
        login: 'eric.sampaio',
        current: true,
        status: 'ok',
        onRemove: noop
      }
    ]
  }
};

export default {
  props: {
    labels: listLabels,
    model: makeListModel({rows: [analytics, rows[0]], resultLabel: '2 of 2 populations'})
  }
};
