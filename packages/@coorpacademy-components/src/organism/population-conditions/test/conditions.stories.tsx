import React, {useRef, useState} from 'react';
import {filter, find, includes, map, noop} from 'lodash/fp';
import PopulationConditions from '..';
import MembershipSummary from '../../../molecule/membership-summary';
import ToolTip from '../../../atom/tooltip';
import conditionDetails from '../../../atom/tooltip/test/fixtures/interactive-conditions';
import {ConditionGroup, ConditionsModel, Criterion} from '../types';
import {SummaryRow} from '../../../molecule/membership-summary/types';
import {COLORS} from '../../../variables/colors';
import {
  allOperators,
  fields,
  labels,
  makeModel,
  operators,
  options,
  preserved,
  summaryValues,
  summaryLabels
} from '../../../test/helpers/population-conditions';
import prototypeReference from './fixtures/prototype-reference';
import loading from './fixtures/values-loading';
import error from './fixtures/values-error';
import emptyValues from './fixtures/values-empty';

export default {title: 'Organism/PopulationConditions/Membership conditions'};

const frame: React.CSSProperties = {
  maxWidth: 1180,
  padding: 24,
  margin: 'auto',
  fontFamily: 'Gilroy, sans-serif',
  color: COLORS.cm_grey_700
};
type DraftRow = {
  id: string;
  field: string;
  operator: string;
  values: string[];
  text: string;
  query: string;
  caseSensitive: boolean;
};
type DraftGroup = {id: string; rows: DraftRow[]};
const draftRow = (id: string): DraftRow => ({
  id,
  field: 'Department',
  operator: 'in',
  values: [],
  text: '',
  query: '',
  caseSensitive: false
});

const sentence = (row: DraftRow, first: boolean): SummaryRow => {
  const multiple = row.operator === 'in' || row.operator === 'not-in';
  const values = multiple ? row.values : [row.text];
  const negative = row.operator === 'not-in' && values.length > 1;
  const separator = negative ? 'nor' : 'or';
  return {
    id: row.id,
    prefix: first ? 'Learners whose' : 'whose',
    field: row.field,
    comparison: negative
      ? 'is neither'
      : find({value: row.operator}, operators)?.name.replace(
          'Regular expression (advanced)',
          'matches'
        ) || '',
    values: summaryValues(values, separator)
  };
};

// This isolated story simulates App state only. Production Components never own these drafts.
export const ControlledConditions = () => {
  const nextId = useRef(1);
  const [groups, setGroups] = useState<DraftGroup[]>([
    {id: 'initial', rows: [{...draftRow('initial-row'), values: ['Finance', 'Legal']}]}
  ]);
  const [support, setSupport] = useState(true);
  const updateRow = (groupId: string, rowId: string, patch: Partial<DraftRow>) =>
    setGroups(
      map((group: DraftGroup) =>
        group.id === groupId
          ? {
              ...group,
              rows: map(row => (row.id === rowId ? {...row, ...patch} : row), group.rows)
            }
          : group
      )
    );
  const summary = {
    labels: summaryLabels,
    groups: map(
      group => ({id: group.id, rows: group.rows.map((row, index) => sentence(row, index === 0))}),
      groups
    )
  };
  const model: ConditionsModel = {
    groups: map(
      (group): ConditionGroup => ({
        id: group.id,
        rows: map((row): Criterion => {
          const multiple = row.operator === 'in' || row.operator === 'not-in';
          const visible = filter(
            value =>
              !includes(value, row.values) && value.toLowerCase().includes(row.query.toLowerCase()),
            options
          );
          const suggestions = map(name => ({name, value: name}), visible);
          const create =
            row.query && !includes(row.query, [...options, ...row.values])
              ? [{name: `Add “${row.query}”`, value: row.query}]
              : [];
          return {
            id: row.id,
            field: {
              options: map(name => ({name, value: name, selected: row.field === name}), fields),
              onChange: field => updateRow(group.id, row.id, {field, values: [], query: ''})
            },
            comparison: {
              options: map(
                option => ({...option, selected: option.value === row.operator}),
                operators
              ),
              onChange: operator => updateRow(group.id, row.id, {operator})
            },
            value: multiple
              ? {
                  kind: 'selection',
                  id: `${row.id}-values`,
                  query: row.query,
                  placeholder: 'Search or add a value',
                  suggestions: [...suggestions, ...create],
                  selected: map(
                    label => ({
                      id: label,
                      label,
                      removeLabel: `Remove ${label}`,
                      onRemove: () =>
                        updateRow(group.id, row.id, {
                          values: filter(value => value !== label, row.values)
                        })
                    }),
                    row.values
                  ),
                  onSearch: query => updateRow(group.id, row.id, {query}),
                  onSelect: value =>
                    updateRow(group.id, row.id, {values: [...row.values, value], query: ''})
                }
              : {
                  kind: 'text',
                  text: row.text,
                  onChange: text => updateRow(group.id, row.id, {text})
                },
            caseSensitive: multiple
              ? undefined
              : {
                  checked: row.caseSensitive,
                  onChange: caseSensitive => updateRow(group.id, row.id, {caseSensitive})
                },
            removeLabel: `Remove ${row.field} condition`,
            onRemove: () =>
              setGroups(
                map((item: DraftGroup) =>
                  item.id === group.id
                    ? {...item, rows: filter(itemRow => itemRow.id !== row.id, item.rows)}
                    : item
                )
              )
          };
        }, group.rows),
        onAdd: () => {
          const id = `row-${nextId.current++}`;
          setGroups(
            map((item: DraftGroup) =>
              item.id === group.id ? {...item, rows: [...item.rows, draftRow(id)]} : item
            )
          );
        },
        removeLabel: 'Remove condition group',
        onRemove: () => setGroups(filter((item: DraftGroup) => item.id !== group.id))
      }),
      groups
    ),
    summary,
    includeSupport: {checked: support, onChange: setSupport},
    onAddGroup: () => {
      const id = `group-${nextId.current++}`;
      setGroups(current => [...current, {id, rows: [draftRow(`${id}-row`)]}]);
    }
  };
  return (
    <div style={frame}>
      <h2>Compose population membership</h2>
      <p>Synthetic App state only. No API request or save is performed.</p>
      <PopulationConditions labels={labels} model={model} />
      <hr />
      <h3>Same summary in population-card details</h3>
      <div data-testid="card-summary">
        <MembershipSummary {...summary} />
      </div>
      <ToolTip
        AnchorElement={conditionDetails.props.AnchorElement}
        interactive
        placement="top"
        aria-label="Membership condition details"
        closeToolTipInformationTextAriaLabel="Press Escape to close membership details"
        TooltipContent={<MembershipSummary {...summary} />}
      />
    </div>
  );
};

export const AllOperators = () => (
  <div style={frame}>
    <PopulationConditions labels={labels} model={allOperators} />
  </div>
);

export const PrototypeReference = () => (
  <div style={{...frame, maxWidth: 'none'}}>
    <PopulationConditions {...prototypeReference.props} />
  </div>
);
export const PreservedAndReadOnly = () => (
  <div style={frame}>
    <PopulationConditions labels={labels} model={preserved} disabled />
  </div>
);
export const ValueStates = () => (
  <div style={frame}>
    <h2>Loading suggestions</h2>
    <PopulationConditions {...loading.props} />
    <h2>Failed suggestions preserve the selection</h2>
    <PopulationConditions {...error.props} />
    <h2>No suggestions yet</h2>
    <PopulationConditions {...emptyValues.props} />
  </div>
);
export const EmptyConditions = () => (
  <div style={frame}>
    <PopulationConditions
      labels={labels}
      model={makeModel({
        groups: [],
        summary: {labels: summaryLabels, groups: []},
        onAddGroup: noop
      })}
    />
  </div>
);
export const TextComparison = () => (
  <div style={frame}>
    <PopulationConditions
      labels={labels}
      model={makeModel({
        groups: [{id: 'match', rows: [allOperators.groups[1].rows[3]]}],
        summary: {
          labels: summaryLabels,
          groups: [
            {
              id: 'match',
              rows: [{...allOperators.summary.groups[1].rows[3], prefix: 'Learners whose'}]
            }
          ]
        }
      })}
    />
  </div>
);
