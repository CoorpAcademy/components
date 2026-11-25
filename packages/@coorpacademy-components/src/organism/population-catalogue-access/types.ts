import PropTypes from 'prop-types';

export type AccessChoice = {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  hint?: string;
  onChange(checked: boolean): void;
};

export type PlaylistOption = {
  name: string;
  value: string;
  selected: boolean;
  rightLabel: string;
  warning?: boolean;
  disabled?: boolean;
};

export type PlaylistTag = {
  id: string;
  label: string;
  warning?: boolean;
  hint?: string;
};

export type CatalogueTag = PlaylistTag & {
  statusLabel?: string;
  removeLabel: string;
  onRemove?(): void;
};

export type CustomPlaylistTag = PlaylistTag & {href?: string};
export type Action = {disabled?: boolean; onClick(): void};
export type Status = {
  kind: 'loading' | 'error';
  message: string;
  onRetry?(): void;
};

export type CatalogueSelection = {
  query: string;
  options: PlaylistOption[];
  selected: CatalogueTag[];
  selectionLabel: string;
  countLabel: string;
  showEmpty: boolean;
  selectAll: Action;
  clear: Action;
  toggle?: {label: string; action: Action};
  onSearch(query: string): void;
  onChange(choices: PlaylistOption[]): void;
};

// App prepares eligibility, formatted counts, warnings, mode and authorised links.
// There are no group refs, permission predicates or API operations in this model.
export type CatalogueAccessModel = {
  id: string;
  choices: AccessChoice[];
  selection?: CatalogueSelection;
  warning?: string;
  counts?: Status;
  customPlaylists: {
    items: CustomPlaylistTag[];
    status?: Status;
    empty?: {title: string; message: string};
  };
};

export type CatalogueAccessLabels = {
  title: string;
  description: string;
  modes: string;
  catalogueLegend: string;
  customLegend: string;
  playlists: string;
  search: string;
  noResults: string;
  selectAll: string;
  clear: string;
  retry: string;
  selected: string;
  emptyTitle: string;
  emptyMessage: string;
  customTitle: string;
  customDescription: string;
  customList: string;
  note?: string;
};

export type PopulationCatalogueAccessProps = {
  model: CatalogueAccessModel;
  labels: CatalogueAccessLabels;
  disabled?: boolean;
};

const action = PropTypes.shape({disabled: PropTypes.bool, onClick: PropTypes.func.isRequired});
const status = PropTypes.shape({
  kind: PropTypes.oneOf(['loading', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func
});
const tag = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  warning: PropTypes.bool,
  hint: PropTypes.string
};

export const propTypes = {
  model: PropTypes.shape({
    id: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        disabled: PropTypes.bool,
        hint: PropTypes.string,
        onChange: PropTypes.func.isRequired
      }).isRequired
    ).isRequired,
    selection: PropTypes.shape({
      query: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
          selected: PropTypes.bool.isRequired,
          rightLabel: PropTypes.string.isRequired,
          warning: PropTypes.bool,
          disabled: PropTypes.bool
        }).isRequired
      ).isRequired,
      selected: PropTypes.arrayOf(
        PropTypes.shape({
          ...tag,
          removeLabel: PropTypes.string.isRequired,
          statusLabel: PropTypes.string,
          onRemove: PropTypes.func
        }).isRequired
      ).isRequired,
      selectionLabel: PropTypes.string.isRequired,
      countLabel: PropTypes.string.isRequired,
      showEmpty: PropTypes.bool.isRequired,
      selectAll: action.isRequired,
      clear: action.isRequired,
      toggle: PropTypes.shape({label: PropTypes.string.isRequired, action: action.isRequired}),
      onSearch: PropTypes.func.isRequired,
      onChange: PropTypes.func.isRequired
    }),
    warning: PropTypes.string,
    counts: status,
    customPlaylists: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({...tag, href: PropTypes.string}).isRequired)
        .isRequired,
      status,
      empty: PropTypes.shape({
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
      })
    }).isRequired
  }).isRequired,
  labels: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    modes: PropTypes.string.isRequired,
    catalogueLegend: PropTypes.string.isRequired,
    customLegend: PropTypes.string.isRequired,
    playlists: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    noResults: PropTypes.string.isRequired,
    selectAll: PropTypes.string.isRequired,
    clear: PropTypes.string.isRequired,
    retry: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    emptyTitle: PropTypes.string.isRequired,
    emptyMessage: PropTypes.string.isRequired,
    customTitle: PropTypes.string.isRequired,
    customDescription: PropTypes.string.isRequired,
    customList: PropTypes.string.isRequired,
    note: PropTypes.string
  }).isRequired,
  disabled: PropTypes.bool
};
