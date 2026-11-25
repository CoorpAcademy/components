import {map, noop} from 'lodash/fp';
import {MembershipSummaryProps, SummaryRow} from '../../molecule/membership-summary/types';
import {
  Criterion,
  ConditionsModel,
  PopulationConditionsProps
} from '../../organism/population-conditions/types';

// Synthetic App props. Production locale keys and condition codecs belong to App Backoffice.
export const labels: PopulationConditionsProps['labels'] = {
  title: 'Membership conditions',
  description: 'Choose which learners belong to this population.',
  groupTitle: 'All of these conditions',
  field: 'Profile field',
  comparison: 'Comparison',
  value: 'Value',
  caseSensitive: 'Case sensitive',
  addCondition: 'Add condition',
  addGroup: 'Add another group (OR)',
  retry: 'Try again',
  supportTitle: 'Support section',
  supportLabel: 'Allow access for Coorpacademy technical support',
  supportDescription:
    'Give Coorpacademy support access to this population to help your administrators.',
  summaryTitle: 'Membership summary',
  emptyTitle: 'No conditions yet',
  emptyMessage: 'Add a group and choose a profile field to define your population.'
};

export const summaryLabels: MembershipSummaryProps['labels'] = {
  and: 'AND',
  or: 'OR',
  emptyTitle: 'No membership summary yet',
  emptyMessage: 'Complete a condition to see which learners it targets.'
};

export const operators = [
  {value: 'in', name: 'is'},
  {value: 'not-in', name: 'is not'},
  {value: 'contains', name: 'contains'},
  {value: 'starts-with', name: 'starts with'},
  {value: 'ends-with', name: 'ends with'},
  {value: 'match', name: 'Regular expression (advanced)'}
];
export const fields = ['Department', 'Country', 'Login', 'Email', 'Job title'];
export const options = ['Finance', 'Legal', 'Operations', 'Support'];

const defaultRow: Criterion = {
  id: 'department',
  field: {
    options: map(name => ({name, value: name, selected: name === 'Department'}), fields),
    onChange: noop
  },
  comparison: {
    options: map(option => ({...option, selected: option.value === 'in'}), operators),
    onChange: noop
  },
  value: {
    kind: 'selection',
    id: 'department-values',
    query: '',
    placeholder: 'Search or add a value',
    suggestions: map(name => ({name, value: name}), ['Operations', 'Support']),
    selected: map(
      label => ({id: label, label, removeLabel: `Remove ${label}`, onRemove: noop}),
      ['Finance', 'Legal']
    ),
    onSearch: noop,
    onSelect: noop
  },
  removeLabel: 'Remove Department condition',
  onRemove: noop
};
export const makeRow = (overrides: Partial<Criterion> = {}): Criterion => ({
  ...defaultRow,
  ...overrides
});

export const summary: MembershipSummaryProps = {
  labels: summaryLabels,
  groups: [
    {
      id: 'finance',
      rows: [
        {
          id: 'department',
          prefix: 'Learners whose',
          field: 'Department',
          comparison: 'is',
          values: [
            {id: 'Finance', label: 'Finance'},
            {id: 'Legal', label: 'Legal', prefix: 'or'}
          ]
        }
      ]
    }
  ]
};

const defaultModel: ConditionsModel = {
  groups: [
    {
      id: 'finance',
      rows: [makeRow()],
      onAdd: noop,
      onRemove: noop,
      removeLabel: 'Remove first group'
    }
  ],
  summary,
  includeSupport: {checked: true, onChange: noop},
  onAddGroup: noop
};
export const makeModel = (overrides: Partial<ConditionsModel> = {}): ConditionsModel => ({
  ...defaultModel,
  ...overrides
});

export const examples = [
  {field: 'Department', operator: 'in', values: ['Finance', 'Legal', 'Operations']},
  {field: 'Country', operator: 'not-in', values: ['Germany', 'Belgium']},
  {field: 'Country', operator: 'in', values: ['France']},
  {field: 'Department', operator: 'not-in', values: ['External']},
  {field: 'Email', operator: 'contains', values: ['coorpacademy']},
  {field: 'Login', operator: 'starts-with', values: ['north.']},
  {field: 'Email', operator: 'ends-with', values: ['@example.org']},
  {field: 'Job title', operator: 'match', values: ['^(Manager|Director)$']}
];

export const exampleRows: Criterion[] = examples.map((example, index: number) => {
  const row = makeRow({id: `rule-${index}`});
  const multiple = example.operator === 'in' || example.operator === 'not-in';
  return {
    ...row,
    field: {
      ...row.field,
      options: map(name => ({name, value: name, selected: name === example.field}), fields)
    },
    comparison: {
      ...row.comparison,
      options: map(option => ({...option, selected: option.value === example.operator}), operators)
    },
    value: multiple
      ? {
          kind: 'selection',
          id: `rule-${index}-values`,
          query: '',
          placeholder: 'Search or add a value',
          suggestions: [],
          selected: map(
            label => ({id: label, label, removeLabel: `Remove ${label}`, onRemove: noop}),
            example.values
          ),
          onSearch: noop,
          onSelect: noop
        }
      : {kind: 'text', text: example.values[0], onChange: noop},
    caseSensitive: multiple ? undefined : {checked: false, onChange: noop},
    removeLabel: `Remove ${example.field} condition ${index + 1}`
  };
});

export const exampleSummaryRows: SummaryRow[] = examples.map((example, index) => {
  let comparison = operators.find(option => option.value === example.operator)?.name || '';
  if (example.operator === 'match') comparison = 'matches';
  if (example.operator === 'not-in' && example.values.length > 1) comparison = 'is neither';
  const separator = example.operator === 'not-in' ? 'nor' : 'or';
  return {
    id: `rule-${index}`,
    prefix: index === 0 || index === 4 ? 'Learners whose' : 'whose',
    field: example.field,
    comparison,
    values: example.values.map((label, position) => ({
      id: label,
      label,
      prefix: position > 0 ? separator : undefined
    }))
  };
});

export const allOperators = makeModel({
  groups: [
    {
      id: 'first',
      rows: exampleRows.slice(0, 4),
      onAdd: noop,
      onRemove: noop,
      removeLabel: 'Remove first group'
    },
    {
      id: 'second',
      rows: exampleRows.slice(4),
      onAdd: noop,
      onRemove: noop,
      removeLabel: 'Remove second group'
    }
  ],
  summary: {
    labels: summaryLabels,
    groups: [
      {id: 'first', rows: exampleSummaryRows.slice(0, 4)},
      {id: 'second', rows: exampleSummaryRows.slice(4)}
    ]
  }
});

export const preserved = makeModel({
  groups: [
    {
      id: 'legacy',
      rows: [
        {
          id: 'legacy-rule',
          preserved: {
            field: 'Legacy profile field',
            rawValue: '{"#range":[1700000000,1800000000]}',
            message:
              'This saved condition is read-only. It will be preserved when you save other changes.'
          }
        },
        makeRow()
      ],
      onAdd: noop
    }
  ],
  summary: {
    labels: summaryLabels,
    groups: [
      {
        id: 'legacy',
        rows: [
          {
            id: 'legacy-rule',
            prefix: 'Learners whose',
            field: 'Legacy profile field',
            comparison: 'uses a saved condition',
            values: [],
            note: 'Preserved without changes'
          },
          ...summary.groups[0].rows
        ]
      }
    ]
  }
});
