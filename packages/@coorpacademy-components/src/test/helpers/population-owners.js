import {noop, some} from 'lodash/fp';

// Example strings for isolated fixtures. App supplies real translated props.
export const personLabels = {
  you: 'You',
  deactivated: 'Deactivated',
  unknown: 'Account not found',
  ambiguous: 'Multiple accounts found',
  emptyTitle: 'No owners selected',
  emptyMessage: 'Search for someone by name or login, or use Add me to include yourself.'
};

export const ownerLabels = {
  title: 'Owners',
  description: 'Choose who can manage reporting for this Analytics population.',
  search: 'Search owners by name or login',
  loading: 'Searching for owners…',
  searchError: 'Owners could not be searched. Try again.',
  resolutionError:
    'Some owner details could not be loaded. Your selected owners are kept. Try again.',
  retry: 'Try again',
  suggestions: 'Suggested owners',
  selected: 'Selected owners',
  noResultsTitle: 'No matching owners',
  noResultsMessage: 'Try a different name or login.',
  deactivatedLegend:
    'The crossed-out eye marks a deactivated account. It remains an owner until you remove it.',
  people: personLabels
};

/** @type {import('../../molecule/person-tags/types').Person[]} */
export const people = [
  {
    id: 'alex',
    name: 'Alex Martin',
    login: 'alex.martin',
    current: true,
    status: 'ok',
    onRemove: noop,
    removeAriaLabel: 'Remove owner alex.martin',
    onSelect: noop,
    selectAriaLabel: 'Add alex.martin as owner'
  },
  {
    id: 'morgan',
    name: 'Morgan Taylor',
    login: 'morgan.taylor',
    status: 'ok',
    onRemove: noop,
    removeAriaLabel: 'Remove owner morgan.taylor',
    onSelect: noop,
    selectAriaLabel: 'Add morgan.taylor as owner'
  },
  {
    id: 'former',
    name: 'Former Owner',
    login: 'former.owner',
    status: 'deactivated',
    onRemove: noop,
    removeAriaLabel: 'Remove owner former.owner',
    selectDisabled: true
  }
];

/** @type {import('../../organism/population-owners/types').OwnersModel} */
const defaultModel = {
  query: '',
  selected: people,
  suggestions: [],
  addMe: {label: 'You are already an owner', disabled: true},
  onSearch: noop,
  onAddMe: noop,
  onRetry: noop
};

/**
 * Model builder for mock App behavior in tests/stories only.
 * @param {Partial<import('../../organism/population-owners/types').OwnersModel> & {selfAvailable?: boolean, selfSelected?: boolean, warningCount?: number}} overrides
 */
export const makeModel = (overrides = {}) => {
  const {selfAvailable = true, selfSelected = true, warningCount = 1, ...props} = overrides;
  const model = {...defaultModel, ...props};
  return {
    ...model,
    addMe: {
      label: selfSelected ? 'You are already an owner' : 'Add me',
      disabled: !selfAvailable || selfSelected,
      hint: selfAvailable
        ? undefined
        : 'Your platform profile is unavailable. You can still search for an owner by name or login.'
    },
    warning:
      warningCount > 0
        ? `${warningCount} ${warningCount === 1 ? 'owner is' : 'owners are'} deactivated. Review ${
            warningCount === 1 ? 'this account' : 'these accounts'
          } and remove ${warningCount === 1 ? 'it' : 'them'} if needed.`
        : undefined,
    showNoResults:
      model.query.trim().length > 0 &&
      !model.loading &&
      !model.error &&
      model.suggestions.length === 0,
    showDeactivatedLegend: some({status: 'deactivated'}, model.selected)
  };
};
