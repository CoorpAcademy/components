import PropTypes from 'prop-types';
import {
  Person,
  PersonTagsLabels,
  labelsPropTypes,
  personPropTypes
} from '../../molecule/person-tags/types';

export type OwnersModel = {
  query: string;
  selected: Person[];
  suggestions: Person[];
  addMe: {label: string; disabled: boolean; hint?: string};
  warning?: string;
  showNoResults?: boolean;
  showDeactivatedLegend?: boolean;
  loading?: boolean;
  error?: boolean;
  resolutionError?: boolean;
  onSearch(query: string): void;
  onAddMe(): void;
  onRetry?(): void;
};

export type PopulationOwnersLabels = {
  title: string;
  description: string;
  search: string;
  loading: string;
  searchError: string;
  resolutionError: string;
  retry: string;
  suggestions: string;
  selected: string;
  noResultsTitle: string;
  noResultsMessage: string;
  deactivatedLegend: string;
  people: PersonTagsLabels;
};

export type PopulationOwnersProps = {
  model: OwnersModel;
  disabled?: boolean;
  labels: PopulationOwnersLabels;
};

export const propTypes = {
  model: PropTypes.shape({
    query: PropTypes.string.isRequired,
    selected: PropTypes.arrayOf(PropTypes.shape(personPropTypes).isRequired).isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.shape(personPropTypes).isRequired).isRequired,
    addMe: PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
      hint: PropTypes.string
    }).isRequired,
    warning: PropTypes.string,
    showNoResults: PropTypes.bool,
    showDeactivatedLegend: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    resolutionError: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
    onAddMe: PropTypes.func.isRequired,
    onRetry: PropTypes.func
  }).isRequired,
  disabled: PropTypes.bool,
  labels: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
    searchError: PropTypes.string.isRequired,
    resolutionError: PropTypes.string.isRequired,
    retry: PropTypes.string.isRequired,
    suggestions: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    noResultsTitle: PropTypes.string.isRequired,
    noResultsMessage: PropTypes.string.isRequired,
    deactivatedLegend: PropTypes.string.isRequired,
    people: PropTypes.shape(labelsPropTypes).isRequired
  }).isRequired
};
