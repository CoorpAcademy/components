import PropTypes from 'prop-types';
import {
  Person,
  PersonTagsLabels,
  labelsPropTypes,
  personPropTypes
} from '../../molecule/person-tags/types';

export type ResponsibleAction = {
  label: string;
  disabled?: boolean;
  onClick(): void;
};

// App supplies eligible people from applied membership, formatted copy and bound actions.
export type ResponsiblesModel = {
  users: Person[];
  countLabel?: string;
  evaluatedAtLabel?: string;
  loading?: boolean;
  loadingMore?: boolean;
  refresh?: ResponsibleAction;
  loadMore?: ResponsibleAction;
  error?: {message: string; retry?: ResponsibleAction};
};

export type PopulationResponsiblesLabels = {
  title: string;
  description: string;
  list: string;
  loading: string;
  loadingMore: string;
  people: PersonTagsLabels;
};

export type PopulationResponsiblesProps = {
  model: ResponsiblesModel;
  labels: PopulationResponsiblesLabels;
  disabled?: boolean;
};

const action = PropTypes.shape({
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
});

export const propTypes = {
  model: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape(personPropTypes).isRequired).isRequired,
    countLabel: PropTypes.string,
    evaluatedAtLabel: PropTypes.string,
    loading: PropTypes.bool,
    loadingMore: PropTypes.bool,
    refresh: action,
    loadMore: action,
    error: PropTypes.shape({message: PropTypes.string.isRequired, retry: action})
  }).isRequired,
  labels: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
    loadingMore: PropTypes.string.isRequired,
    people: PropTypes.shape(labelsPropTypes).isRequired
  }).isRequired,
  disabled: PropTypes.bool
};
