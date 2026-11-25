import {find, includes, map, noop, times} from 'lodash/fp';
import {
  CatalogueAccessLabels,
  CatalogueAccessModel,
  CatalogueSelection
} from '../../organism/population-catalogue-access/types';

export const catalogueLabels: CatalogueAccessLabels = {
  title: 'Catalogue access',
  description: 'Choose how this HR population grants access to content.',
  modes: 'Content access',
  catalogueLegend: 'Catalogue playlist',
  customLegend: 'Custom playlist',
  playlists: 'Coorpacademy catalogue playlists',
  search: 'Search Coorpacademy catalogue playlists',
  noResults: 'No catalogue playlist matches this search.',
  selectAll: 'Select all',
  clear: 'Clear selection',
  retry: 'Try again',
  selected: 'Selected catalogue playlists',
  emptyTitle: 'Choose catalogue playlists',
  emptyMessage:
    'Select at least one Coorpacademy catalogue playlist, or choose Custom playlists only.',
  customTitle: 'Attached custom playlists',
  customDescription:
    'Published custom playlists attached to this population. Manage their audience in the custom playlist editor.',
  customList: 'Custom playlist attachments'
};

export const accessModes = [
  {
    id: 'all',
    title: 'All platform content',
    description:
      'Access all current and future platform content, including the Coorpacademy catalogue and other content published on the platform.'
  },
  {
    id: 'coorp',
    title: 'Coorpacademy catalogue',
    description:
      'Access the Coorpacademy catalogue as it evolves. Your custom content is only accessible through custom playlists.'
  },
  {
    id: 'custom',
    title: 'Custom playlists only',
    description:
      'No direct catalogue access. Custom playlist administrators grant access by attaching playlists to this population. Newly published content must be added to a custom playlist to become accessible.'
  },
  {
    id: 'selected',
    title: 'Selected catalogue playlists',
    description:
      'Access the selected catalogue playlists, including updates to those playlists. New playlists are not added automatically.'
  }
];

const names = [
  'Leadership essentials',
  'Managing teams',
  'Communicating with impact',
  'Digital culture',
  'Leading change',
  'Customer experience',
  'Data and AI',
  'Working together'
];

export const cataloguePlaylists = times(
  index => ({
    id: `catalogue-${index}`,
    name: index < names.length ? names[index] : `${names[index % names.length]} · ${index + 1}`,
    count: index === 0 ? 0 : index + 1
  }),
  60
);

export const customPlaylists: CatalogueAccessModel['customPlaylists'] = {
  items: [
    {
      id: 'custom-onboarding',
      label: 'Onboarding · 4 content items',
      href: '/brands/example/editorialization/custom-playlist/custom-onboarding/step/populations'
    },
    {
      id: 'custom-support',
      label: 'Company essentials · 6 content items',
      hint: 'You do not have permission to edit this custom playlist.'
    }
  ]
};

export const makeChoices = (mode?: string, onChange: (nextMode: string) => void = noop) =>
  map(
    choice => ({
      ...choice,
      checked: choice.id === mode,
      onChange: (checked: boolean) => {
        if (checked) onChange(choice.id);
      }
    }),
    accessModes
  );

export const makeSelection = (
  ids = ['catalogue-1', 'catalogue-2'],
  overrides: Partial<CatalogueSelection> = {}
): CatalogueSelection => {
  const selection: CatalogueSelection = {
    query: '',
    countLabel: `${ids.length} of 60 playlists selected`,
    selectionLabel: `${ids.length} playlists selected`,
    showEmpty: ids.length === 0,
    options: map(
      playlist => ({
        name: playlist.name,
        value: playlist.id,
        selected: includes(playlist.id, ids),
        rightLabel: playlist.count === 0 ? 'No content' : `${playlist.count} content items`,
        warning: playlist.count === 0,
        disabled: playlist.count === 0 && !includes(playlist.id, ids)
      }),
      cataloguePlaylists
    ),
    selected: map(id => {
      const playlist = find({id}, cataloguePlaylists);
      return {
        id,
        label: playlist?.name || id,
        warning: playlist?.count === 0,
        hint:
          playlist?.count === 0 ? 'This selected playlist has no available content.' : undefined,
        removeLabel: `Remove ${playlist?.name || id}`,
        onRemove: noop
      };
    }, ids),
    selectAll: {onClick: noop},
    clear: {disabled: ids.length === 0, onClick: noop},
    onSearch: noop,
    onChange: noop
  };
  return {...selection, ...overrides};
};

export const makeModel = (overrides: Partial<CatalogueAccessModel> = {}): CatalogueAccessModel => {
  const model: CatalogueAccessModel = {
    id: 'population-catalogue',
    choices: makeChoices('selected'),
    selection: makeSelection(),
    customPlaylists
  };
  return {...model, ...overrides};
};

export const creation = makeModel({
  choices: makeChoices(),
  selection: undefined,
  customPlaylists: {
    items: [],
    empty: {
      title: 'No custom playlists attached yet',
      message: 'Save this population, then attach it from a published custom playlist.'
    }
  }
});

export const warnings = makeModel({
  warning:
    'A selected catalogue playlist and an attached custom playlist have no available content. Remove the catalogue selection, or update the custom playlist in its editor.',
  selection: makeSelection(['catalogue-0', 'catalogue-1']),
  customPlaylists: {
    items: [
      ...customPlaylists.items,
      {
        id: 'custom-empty',
        label: 'Former onboarding · No content',
        warning: true,
        hint: 'This attached playlist is empty. Open its editor to update its content.',
        href: '/brands/example/editorialization/custom-playlist/custom-empty/step/populations'
      }
    ]
  }
});

export const loading = makeModel({
  counts: {kind: 'loading', message: 'Loading available content counts…'},
  selection: makeSelection(undefined, {
    options: map(
      option => ({...option, disabled: !option.selected, rightLabel: 'Count unavailable'}),
      makeSelection().options
    ),
    selectAll: {disabled: true, onClick: noop}
  }),
  customPlaylists: {
    ...customPlaylists,
    status: {kind: 'loading', message: 'Refreshing custom playlist attachments…'}
  }
});

export const errors = makeModel({
  ...loading,
  counts: {kind: 'error', message: 'Content counts could not be loaded.', onRetry: noop},
  customPlaylists: {
    ...customPlaylists,
    status: {
      kind: 'error',
      message: 'Custom playlist attachments could not be refreshed.',
      onRetry: noop
    }
  }
});
