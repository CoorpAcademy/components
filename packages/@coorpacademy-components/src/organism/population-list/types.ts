import PropTypes from 'prop-types';
import {MembershipSummaryProps, summaryPropTypes} from '../../molecule/membership-summary/types';
import {
  Person,
  PersonTagsLabels,
  personPropTypes,
  labelsPropTypes
} from '../../molecule/person-tags/types';

export type ReadAction = {label: string; disabled?: boolean; onClick(): void};
export type Playlist = {id: string; name: string; href?: string};
export type PlaylistDetails = {
  label: string;
  ariaLabel: string;
  items: Playlist[];
  loading?: boolean;
  error?: {message: string; retry?: ReadAction};
};
export type OwnerDetails = {
  label: string;
  ariaLabel: string;
  items: Person[];
  loading?: boolean;
  error?: {message: string; retry?: ReadAction};
};
export type PopulationRow = {
  id: string;
  title: string;
  archived: boolean;
  typeTag: {label: string; type: 'info' | 'advanced'};
  memberLabel?: string;
  conditionsLabel: string;
  conditionGroups: MembershipSummaryProps['groups'];
  accessLabel?: string;
  cataloguePlaylists?: PlaylistDetails;
  customPlaylists?: PlaylistDetails;
  ownerInformation?: OwnerDetails;
  primaryAction: ReadAction;
  onArchive?(): void;
  onReactivate?(): void;
};
export type ListModel = {
  search: string;
  onSearch(query: string): void;
  onSubmitSearch(): void;
  filter: {
    value: string;
    options: {value: string; label: string}[];
    onChange(value: string): void;
  };
  onCreate(): void;
  rows: PopulationRow[];
  resultLabel?: string;
  evaluatedAtLabel?: string;
  hasMore: boolean;
  loadingMore: boolean;
  moreError?: string;
  loading?: boolean;
  transitioning?: boolean;
  error?: {message: string; retry?: ReadAction};
  countsError?: {message: string; retry?: ReadAction};
  lifecycleError?: string;
  onLoadMore(): void;
};
export type ArchiveConfirmation = {
  busy?: boolean;
  error?: string;
  labels: {
    title: string;
    description: string;
    cancel: string;
    confirm: string;
    close: string;
  };
  onConfirm(): void;
  onCancel(): void;
};
export type PopulationListLabels = {
  title: string;
  description: string;
  create: string;
  search: string;
  searchPlaceholder: string;
  submitSearch: string;
  typeFilter: string;
  list: string;
  loading: string;
  loadingMore: string;
  loadMore: string;
  retry: string;
  emptyTitle: string;
  emptyMessage: string;
  archive: string;
  reactivate: string;
  tooltipInstructions: string;
  loadingDetails: string;
  summary: MembershipSummaryProps['labels'];
  people: PersonTagsLabels;
};
export type PopulationListProps = {
  model: ListModel;
  labels: PopulationListLabels;
  confirmation?: ArchiveConfirmation;
  disabled?: boolean;
};

export const actionPropTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
const error = PropTypes.shape({
  message: PropTypes.string.isRequired,
  retry: PropTypes.shape(actionPropTypes)
});
const details = {
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error
};
const playlists = PropTypes.shape({
  ...details,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      href: PropTypes.string
    }).isRequired
  ).isRequired
});
export const propTypes = {
  model: PropTypes.shape({
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired,
    filter: PropTypes.shape({
      value: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      onChange: PropTypes.func.isRequired
    }).isRequired,
    onCreate: PropTypes.func.isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        archived: PropTypes.bool.isRequired,
        typeTag: PropTypes.shape({
          label: PropTypes.string.isRequired,
          type: PropTypes.oneOf(['info', 'advanced']).isRequired
        }).isRequired,
        memberLabel: PropTypes.string,
        conditionsLabel: PropTypes.string.isRequired,
        conditionGroups: summaryPropTypes.groups,
        accessLabel: PropTypes.string,
        cataloguePlaylists: playlists,
        customPlaylists: playlists,
        ownerInformation: PropTypes.shape({
          ...details,
          items: PropTypes.arrayOf(PropTypes.shape(personPropTypes).isRequired).isRequired
        }),
        primaryAction: PropTypes.shape(actionPropTypes).isRequired,
        onArchive: PropTypes.func,
        onReactivate: PropTypes.func
      }).isRequired
    ).isRequired,
    resultLabel: PropTypes.string,
    evaluatedAtLabel: PropTypes.string,
    hasMore: PropTypes.bool.isRequired,
    loadingMore: PropTypes.bool.isRequired,
    moreError: PropTypes.string,
    onLoadMore: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    transitioning: PropTypes.bool,
    error,
    countsError: error,
    lifecycleError: PropTypes.string
  }).isRequired,
  labels: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    create: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    searchPlaceholder: PropTypes.string.isRequired,
    submitSearch: PropTypes.string.isRequired,
    typeFilter: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
    loadingMore: PropTypes.string.isRequired,
    loadMore: PropTypes.string.isRequired,
    retry: PropTypes.string.isRequired,
    emptyTitle: PropTypes.string.isRequired,
    emptyMessage: PropTypes.string.isRequired,
    archive: PropTypes.string.isRequired,
    reactivate: PropTypes.string.isRequired,
    tooltipInstructions: PropTypes.string.isRequired,
    loadingDetails: PropTypes.string.isRequired,
    summary: summaryPropTypes.labels,
    people: PropTypes.shape(labelsPropTypes).isRequired
  }).isRequired,
  confirmation: PropTypes.shape({
    busy: PropTypes.bool,
    error: PropTypes.string,
    labels: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cancel: PropTypes.string.isRequired,
      confirm: PropTypes.string.isRequired,
      close: PropTypes.string.isRequired
    }).isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }),
  disabled: PropTypes.bool
};
