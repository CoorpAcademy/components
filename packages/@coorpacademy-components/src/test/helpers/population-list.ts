import {noop, map, range} from 'lodash/fp';
import {
  PopulationListLabels,
  ListModel,
  PopulationRow,
  ArchiveConfirmation
} from '../../organism/population-list/types';
import {summary} from './population-conditions';
import {people, personLabels} from './population-owners';

export const listLabels: PopulationListLabels = {
  title: 'Populations',
  description:
    'Create groups of learners from their profile information and manage their access or reporting scope.',
  create: 'Create population',
  search: 'Population name',
  searchPlaceholder: 'Search populations by name',
  submitSearch: 'Search',
  typeFilter: 'Type',
  list: 'Populations',
  loading: 'Loading populations…',
  loadingMore: 'Loading more populations…',
  loadMore: 'Load more',
  retry: 'Try again',
  emptyTitle: 'No populations found',
  emptyMessage: 'Try another name or type, or create a population to get started.',
  archive: 'Archive',
  reactivate: 'Reactivate',
  tooltipInstructions: 'Press Escape to close. Use Tab to browse these details.',
  loadingDetails: 'Loading details…',
  summary: summary.labels,
  people: {
    ...personLabels,
    emptyTitle: 'No owners',
    emptyMessage: 'Open this Analytics population to manage its owners.'
  }
};
export const rows: PopulationRow[] = [
  {
    id: 'finance',
    title: 'Finance teams · France',
    archived: false,
    typeTag: {label: 'HR', type: 'info'},
    memberLabel: '84 learners',
    conditionsLabel: 'Membership conditions for Finance teams · France',
    conditionGroups: summary.groups,
    cataloguePlaylists: {
      label: '2 catalogue playlists',
      ariaLabel: 'Catalogue playlists for Finance teams · France',
      items: [
        {id: 'leadership', name: 'Leadership essentials'},
        {id: 'teams', name: 'Managing teams'}
      ]
    },
    customPlaylists: {
      label: '2 custom playlists',
      ariaLabel: 'Custom playlists for Finance teams · France',
      items: [
        {
          id: 'onboarding',
          name: 'Company onboarding',
          href: 'https://example.org/custom-playlists/onboarding/populations'
        },
        {id: 'journey', name: 'Our leadership journey'}
      ]
    },
    primaryAction: {label: 'Edit', onClick: noop},
    onArchive: noop
  },
  {
    id: 'managers',
    title: 'New managers',
    archived: false,
    typeTag: {label: 'HR', type: 'info'},
    memberLabel: '126 learners',
    conditionsLabel: 'Membership conditions for New managers',
    conditionGroups: summary.groups,
    accessLabel: 'All platform content',
    customPlaylists: {
      label: 'No custom playlists attached',
      ariaLabel: 'Custom playlists for New managers',
      items: []
    },
    primaryAction: {label: 'Edit', onClick: noop},
    onArchive: noop
  },
  {
    id: 'coorp',
    title: 'Coorpacademy learners',
    archived: false,
    typeTag: {label: 'HR', type: 'info'},
    memberLabel: '240 learners',
    conditionsLabel: 'Membership conditions for Coorpacademy learners',
    conditionGroups: summary.groups,
    accessLabel: 'Coorpacademy catalogue',
    customPlaylists: {
      label: 'No custom playlists attached',
      ariaLabel: 'Custom playlists for Coorpacademy learners',
      items: []
    },
    primaryAction: {label: 'Edit', onClick: noop},
    onArchive: noop
  },
  {
    id: 'custom',
    title: 'Custom learning paths',
    archived: false,
    typeTag: {label: 'HR', type: 'info'},
    memberLabel: '62 learners',
    conditionsLabel: 'Membership conditions for Custom learning paths',
    conditionGroups: summary.groups,
    accessLabel: 'Custom playlists only',
    customPlaylists: {
      label: '2 custom playlists',
      ariaLabel: 'Custom playlists for Custom learning paths',
      items: [
        {id: 'onboarding', name: 'Company onboarding'},
        {id: 'journey', name: 'Our leadership journey'}
      ]
    },
    primaryAction: {label: 'Edit', onClick: noop},
    onArchive: noop
  },
  {
    id: 'analytics',
    title: 'Onboarding progress',
    archived: false,
    typeTag: {label: 'Analytics', type: 'advanced'},
    memberLabel: '231 learners',
    conditionsLabel: 'Membership conditions for Onboarding progress',
    conditionGroups: summary.groups,
    ownerInformation: {
      label: '2 owners',
      ariaLabel: 'Owners of Onboarding progress',
      items: [people[0], people[1]]
    },
    primaryAction: {label: 'Edit', onClick: noop},
    onArchive: noop
  }
];
export const filterOptions = [
  {value: '', label: 'All types'},
  {value: 'rh', label: 'HR'},
  {value: 'analytics', label: 'Analytics'}
];
export const makeListModel = (overrides: Partial<ListModel> = {}): ListModel =>
  Object.assign(
    {
      search: '',
      onSearch: noop,
      onSubmitSearch: noop,
      filter: {value: '', options: filterOptions, onChange: noop},
      onCreate: noop,
      rows,
      resultLabel: '5 of 5 populations',
      evaluatedAtLabel:
        'Counts evaluated from the population conditions on 25 November 2026 at 10:30.',
      hasMore: false,
      loadingMore: false,
      onLoadMore: noop
    },
    overrides
  );
export const pageRows = map(
  index => ({
    ...rows[index % rows.length],
    id: `population-${index}`,
    title: `${rows[index % rows.length].title} ${index + 1}`
  }),
  range(0, 62)
);
export const confirmation: ArchiveConfirmation = {
  labels: {
    title: 'Archive population?',
    description:
      'This population will stop granting access and its learner memberships will be updated. You can reactivate it later. Populations used by an active assignment cannot be archived.',
    cancel: 'Cancel',
    confirm: 'Archive',
    close: 'Close archive confirmation'
  },
  onCancel: noop,
  onConfirm: noop
};
export const archivedRows: PopulationRow[] = map(
  row => ({
    ...row,
    archived: true,
    memberLabel: undefined,
    primaryAction: {label: 'View', onClick: noop},
    onArchive: undefined,
    onReactivate: noop
  }),
  rows
);
