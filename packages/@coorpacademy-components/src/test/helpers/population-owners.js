import {noop} from 'lodash/fp';
import createTranslate from '@coorpacademy/translate';
import english from '../../../locales/en/global';

export const translate = createTranslate(english);

/** @type {import('../../molecule/person-tags/types').Person[]} */
export const people = [
  {
    id: 'alex',
    name: 'Alex Martin',
    login: 'alex.martin',
    current: true,
    onRemove: noop,
    onSelect: noop
  },
  {id: 'morgan', name: 'Morgan Taylor', login: 'morgan.taylor', onRemove: noop, onSelect: noop},
  {id: 'former', name: 'Former Owner', login: 'former.owner', status: 'deactivated', onRemove: noop}
];

/** @type {import('../../organism/population-owners/types').OwnersModel} */
const defaultModel = {
  query: '',
  selected: people,
  suggestions: [],
  selfAvailable: true,
  selfSelected: true,
  warningCount: 1,
  onSearch: noop,
  onAddMe: noop,
  onRetry: noop
};

/** @param {Partial<import('../../organism/population-owners/types').OwnersModel>} overrides */
export const makeModel = (overrides = {}) => ({...defaultModel, ...overrides});
