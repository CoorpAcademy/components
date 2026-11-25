import {map, noop} from 'lodash/fp';
import {
  fields,
  labels,
  makeModel,
  makeRow,
  summaryLabels,
  summaryValues
} from '../../../../test/helpers/population-conditions';
import {ConditionGroup} from '../../types';

// The same draft shown in the approved prototype screenshot, including its unchecked support option.
const data = [
  [
    {field: 'Department', values: ['Finance', 'Legal', 'Operations']},
    {field: 'Country', values: []}
  ],
  [
    {field: 'Department', values: []},
    {field: 'Country', values: []}
  ]
];

const groups: ConditionGroup[] = data.map((rows, groupIndex) => ({
  id: `reference-group-${groupIndex}`,
  onAdd: noop,
  rows: rows.map((row, rowIndex) =>
    makeRow({
      id: `reference-${groupIndex}-${rowIndex}`,
      field: {
        options: map(name => ({name, value: name, selected: name === row.field}), fields),
        onChange: noop
      },
      value: {
        kind: 'selection',
        id: `reference-values-${groupIndex}-${rowIndex}`,
        query: '',
        placeholder: 'Search or add a value',
        suggestions: [],
        selected: map(
          label => ({id: label, label, removeLabel: `Remove ${label}`, onRemove: noop}),
          row.values
        ),
        onSearch: noop,
        onSelect: noop
      },
      removeLabel: `Remove ${row.field} condition`
    })
  )
}));

export default {
  props: {
    labels,
    model: makeModel({
      groups,
      includeSupport: {checked: false, onChange: noop},
      summary: {
        labels: summaryLabels,
        groups: data.map((rows, groupIndex) => ({
          id: groups[groupIndex].id,
          rows: rows.map((row, rowIndex) => ({
            id: `reference-${groupIndex}-${rowIndex}`,
            prefix: rowIndex === 0 ? 'Learners whose' : 'whose',
            field: row.field,
            comparison: 'is',
            values: summaryValues(row.values)
          }))
        }))
      }
    })
  }
};
