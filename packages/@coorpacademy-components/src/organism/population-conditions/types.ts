import PropTypes from 'prop-types';
import {MembershipSummaryProps, summaryPropTypes} from '../../molecule/membership-summary/types';

export type Selection = {
  options: {name: string; value: string; selected: boolean}[];
  placeholder?: string;
  onChange(value: string): void;
};

export type SelectedValue = {
  id: string;
  label: string;
  missingLabel?: string;
  removeLabel: string;
  onRemove?(): void;
};

// Suggestion values are opaque identifiers. App retains typed primitive values.
export type ValueSelection = {
  kind: 'selection';
  id: string;
  query: string;
  suggestions: {name: string; value: string}[];
  selected: SelectedValue[];
  placeholder: string;
  status?: {kind: 'loading' | 'error' | 'empty'; message: string; onRetry?(): void};
  loadMore?: {label: string; onClick(): void};
  onSearch(query: string): void;
  onSelect(id: string): void;
};

export type Criterion = {
  id: string;
  field: Selection;
  comparison: Selection;
  value: ValueSelection | {kind: 'text'; text: string; onChange(text: string): void};
  caseSensitive?: {checked: boolean; onChange(checked: boolean): void};
  removeLabel?: string;
  onRemove?(): void;
};

export type PreservedCriterion = {
  id: string;
  preserved: {field: string; rawValue: string; message: string};
};

export type ConditionGroup = {
  id: string;
  rows: Array<Criterion | PreservedCriterion>;
  onAdd?(): void;
  removeLabel?: string;
  onRemove?(): void;
};

export type ConditionsModel = {
  groups: ConditionGroup[];
  summary: MembershipSummaryProps;
  includeSupport: {checked: boolean; onChange(checked: boolean): void};
  onAddGroup(): void;
};

export type PopulationConditionsProps = {
  model: ConditionsModel;
  disabled?: boolean;
  labels: {
    title: string;
    description: string;
    groupTitle: string;
    field: string;
    comparison: string;
    value: string;
    caseSensitive: string;
    addCondition: string;
    addGroup: string;
    retry: string;
    supportTitle: string;
    supportLabel: string;
    supportDescription: string;
    summaryTitle: string;
    emptyTitle: string;
    emptyMessage: string;
  };
};

const selection = PropTypes.shape({
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
});

const checkbox = PropTypes.shape({
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
});

const criterion = PropTypes.oneOfType([
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    preserved: PropTypes.shape({
      field: PropTypes.string.isRequired,
      rawValue: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  }),
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    field: selection.isRequired,
    comparison: selection.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.shape({
        kind: PropTypes.oneOf(['text']).isRequired,
        text: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
      }),
      PropTypes.shape({
        kind: PropTypes.oneOf(['selection']).isRequired,
        id: PropTypes.string.isRequired,
        query: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        suggestions: PropTypes.arrayOf(
          PropTypes.shape({name: PropTypes.string.isRequired, value: PropTypes.string.isRequired})
            .isRequired
        ).isRequired,
        selected: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            missingLabel: PropTypes.string,
            removeLabel: PropTypes.string.isRequired,
            onRemove: PropTypes.func
          }).isRequired
        ).isRequired,
        status: PropTypes.shape({
          kind: PropTypes.oneOf(['loading', 'error', 'empty']).isRequired,
          message: PropTypes.string.isRequired,
          onRetry: PropTypes.func
        }),
        loadMore: PropTypes.shape({
          label: PropTypes.string.isRequired,
          onClick: PropTypes.func.isRequired
        }),
        onSearch: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired
      })
    ]).isRequired,
    caseSensitive: checkbox,
    removeLabel: PropTypes.string,
    onRemove: PropTypes.func
  })
]);

export const propTypes = {
  model: PropTypes.shape({
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        rows: PropTypes.arrayOf(criterion.isRequired).isRequired,
        onAdd: PropTypes.func,
        removeLabel: PropTypes.string,
        onRemove: PropTypes.func
      }).isRequired
    ).isRequired,
    summary: PropTypes.shape(summaryPropTypes).isRequired,
    includeSupport: checkbox.isRequired,
    onAddGroup: PropTypes.func.isRequired
  }).isRequired,
  disabled: PropTypes.bool,
  labels: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    groupTitle: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    caseSensitive: PropTypes.string.isRequired,
    addCondition: PropTypes.string.isRequired,
    addGroup: PropTypes.string.isRequired,
    retry: PropTypes.string.isRequired,
    supportTitle: PropTypes.string.isRequired,
    supportLabel: PropTypes.string.isRequired,
    supportDescription: PropTypes.string.isRequired,
    summaryTitle: PropTypes.string.isRequired,
    emptyTitle: PropTypes.string.isRequired,
    emptyMessage: PropTypes.string.isRequired
  }).isRequired
};
