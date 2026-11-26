import {map, noop, range} from 'lodash/fp';
import {Person} from '../../molecule/person-tags/types';
import {
  PopulationResponsiblesLabels,
  ResponsiblesModel
} from '../../organism/population-responsibles/types';
import {personLabels} from './population-owners';

// Synthetic examples only. App prepares real locales, eligibility, totals and actions.
export const responsibleLabels: PopulationResponsiblesLabels = {
  title: 'Population managers',
  description:
    'People with Analytics access who belong to this population, based on its latest learner update.',
  list: 'HR population managers',
  loading: 'Loading managers…',
  loadingMore: 'Loading more managers…',
  people: {
    ...personLabels,
    emptyTitle: 'No managers in this population',
    emptyMessage: 'Nobody with Analytics access currently belongs to this population.'
  }
};

export const managers: Person[] = [
  {id: 'alex', name: 'Alex Martin', login: 'alex.martin', current: true, status: 'ok'},
  {id: 'morgan', name: 'Morgan Taylor', login: 'morgan.taylor', status: 'ok'}
];

export const managerPages: Person[] = map(
  index => ({
    id: `manager-${index}`,
    name: `Manager ${index + 1}`,
    login: `manager.${index + 1}`,
    status: 'ok' as const
  }),
  range(0, 62)
);

const defaultModel: ResponsiblesModel = {
  users: managers,
  countLabel: '2 managers',
  evaluatedAtLabel: 'Checked on 25 November 2026 at 10:30',
  refresh: {label: 'Refresh', onClick: noop}
};

export const makeModel = (overrides: Partial<ResponsiblesModel> = {}): ResponsiblesModel => ({
  ...defaultModel,
  ...overrides
});

export const creationLabels: PopulationResponsiblesLabels = {
  ...responsibleLabels,
  people: {
    ...responsibleLabels.people,
    emptyTitle: 'Managers will appear here',
    emptyMessage:
      'Managers will be available after this population is saved and its learners are updated.'
  }
};
