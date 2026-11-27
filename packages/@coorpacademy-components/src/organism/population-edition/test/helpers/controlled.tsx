import React, {useState} from 'react';
import {filter, includes, map, some} from 'lodash/fp';
import PopulationList from '../../../population-list';
import ButtonLink from '../../../../atom/button-link';
import {labels, makeEditor, preview, header} from '../../../../test/helpers/population-edition';
import {
  makeModel as makeConditions,
  makeRow,
  fields,
  operators,
  summaryLabels,
  summaryValues
} from '../../../../test/helpers/population-conditions';
import {makeModel as makeOwners, people} from '../../../../test/helpers/population-owners';
import {
  listLabels,
  makeListModel,
  rows,
  confirmation
} from '../../../../test/helpers/population-list';
import {Criterion} from '../../../population-conditions/types';
import {Person} from '../../../../molecule/person-tags/types';
import {EditorShell, IsolatedEditor} from './shell';

type Rule = {
  id: string;
  field: string;
  comparison: string;
  values: string[];
  query: string;
  text: string;
  caseSensitive: boolean;
};
type Group = {id: string; rules: Rule[]};
type Snapshot = {
  name: string;
  owners: string[];
  groups: Group[];
  support: boolean;
  archived: boolean;
};
const rule = (id: string): Rule => ({
  id,
  field: 'Department',
  comparison: 'in',
  values: [],
  query: '',
  text: '',
  caseSensitive: false
});
const initial: Snapshot = {
  name: 'Onboarding progress',
  owners: ['alex', 'morgan', 'former'],
  groups: [{id: 'first', rules: [{...rule('department'), values: ['Finance', 'Legal']}]}],
  support: true,
  archived: false
};
const empty: Snapshot = {name: '', owners: [], groups: [], support: true, archived: false};
const comparisonLabel = (item: Rule) => {
  if (item.comparison === 'not-in') return item.values.length > 1 ? 'is neither' : 'is not';
  if (item.comparison === 'in') return 'is';
  return operators.find(option => option.value === item.comparison)?.name || '';
};

// Stateful synthetic App adapter, excluded from the production package. No real API or DSL.
export default function ControlledEditor({
  isolated = false,
  creating = false
}: {
  isolated?: boolean;
  creating?: boolean;
}) {
  const [saved, setSaved] = useState(initial);
  const [draft, setDraft] = useState(creating ? empty : initial);
  const [mode, setMode] = useState<'list' | 'create' | 'edit'>(creating ? 'create' : 'edit');
  const [ownerQuery, setOwnerQuery] = useState('');
  const [warningKey, setWarningKey] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [failNext, setFailNext] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [lastSaved, setLastSaved] = useState(false);
  const update = (changes: Partial<Snapshot>) => {
    setDraft(value => ({...value, ...changes}));
    setLastSaved(false);
  };
  const updateRule = (id: string, changes: Partial<Rule>) =>
    update({
      groups: map(
        group => ({
          ...group,
          rules: map(item => (item.id === id ? {...item, ...changes} : item), group.rules)
        }),
        draft.groups
      )
    });
  const valid =
    draft.name.trim().length > 0 &&
    draft.groups.length > 0 &&
    draft.groups.every(
      group =>
        group.rules.length > 0 &&
        group.rules.every(item =>
          ['in', 'not-in'].includes(item.comparison)
            ? item.values.length > 0
            : item.text.trim().length > 0
        )
    );
  const dirty = mode === 'create' || JSON.stringify(draft) !== JSON.stringify(saved);
  const selections = map(
    (person: Person) => ({
      ...person,
      onRemove: () => update({owners: filter(id => id !== person.id, draft.owners)})
    }),
    filter(person => includes(person.id, draft.owners), people)
  );
  const addOwner = (id: string) => {
    update({owners: [...draft.owners, id]});
    setOwnerQuery('');
  };
  const savedFeedback = lastSaved
    ? {type: 'success' as const, message: 'Population saved in this demonstration.'}
    : undefined;
  const model = makeEditor({
    archived: draft.archived,
    name: {value: draft.name, onChange: value => update({name: value})},
    focusSection: warningKey > 0 ? 'owners' : undefined,
    focusRequestKey: warningKey,
    conditions: makeConditions({
      groups: draft.groups.map(group => ({
        id: group.id,
        onAdd: () =>
          update({
            groups: draft.groups.map(current =>
              current.id === group.id
                ? {...current, rules: [...current.rules, rule(`rule-${Date.now()}`)]}
                : current
            )
          }),
        onRemove: () => update({groups: filter(current => current.id !== group.id, draft.groups)}),
        removeLabel: 'Remove group',
        rows: group.rules.map(
          (item): Criterion => ({
            ...makeRow({id: item.id}),
            field: {
              options: map(name => ({name, value: name, selected: name === item.field}), fields),
              onChange: value =>
                updateRule(item.id, {field: value, values: [], text: '', query: ''})
            },
            comparison: {
              options: map(
                option => ({...option, selected: option.value === item.comparison}),
                operators
              ),
              onChange: value => updateRule(item.id, {comparison: value, values: [], text: ''})
            },
            value: ['in', 'not-in'].includes(item.comparison)
              ? {
                  kind: 'selection',
                  id: `${item.id}-value`,
                  query: item.query,
                  placeholder: 'Search or add a value',
                  suggestions: [
                    ...filter(
                      name =>
                        !item.values.includes(name) &&
                        name.toLowerCase().includes(item.query.toLowerCase()),
                      item.field === 'Country'
                        ? ['France', 'Germany', 'Belgium']
                        : ['Finance', 'Legal', 'Operations', 'Support']
                    ).map(name => ({name, value: name})),
                    ...(item.query.trim() &&
                    !item.values.includes(item.query) &&
                    ![
                      'Finance',
                      'Legal',
                      'Operations',
                      'Support',
                      'France',
                      'Germany',
                      'Belgium'
                    ].includes(item.query)
                      ? [{name: `Add “${item.query}”`, value: item.query}]
                      : [])
                  ],
                  selected: map(
                    value => ({
                      id: value,
                      label: value,
                      removeLabel: `Remove ${value}`,
                      onRemove: () =>
                        updateRule(item.id, {
                          values: filter(current => current !== value, item.values)
                        })
                    }),
                    item.values
                  ),
                  onSearch: query => updateRule(item.id, {query}),
                  onSelect: value =>
                    updateRule(item.id, {values: [...item.values, value], query: ''})
                }
              : {kind: 'text', text: item.text, onChange: text => updateRule(item.id, {text})},
            caseSensitive: ['in', 'not-in'].includes(item.comparison)
              ? undefined
              : {
                  checked: item.caseSensitive,
                  onChange: checked => updateRule(item.id, {caseSensitive: checked})
                },
            onRemove: () =>
              update({
                groups: draft.groups.map(current => ({
                  ...current,
                  rules: filter(row => row.id !== item.id, current.rules)
                }))
              })
          })
        )
      })),
      onAddGroup: () =>
        update({
          groups: [
            ...draft.groups,
            {id: `group-${Date.now()}`, rules: [rule(`rule-${Date.now()}`)]}
          ]
        }),
      includeSupport: {checked: draft.support, onChange: checked => update({support: checked})},
      summary: {
        labels: summaryLabels,
        groups: draft.groups.map(group => ({
          id: group.id,
          rows: group.rules.map((item, index) => ({
            id: item.id,
            prefix: index === 0 ? 'Learners whose' : 'whose',
            field: item.field,
            comparison: comparisonLabel(item),
            values: summaryValues(
              ['in', 'not-in'].includes(item.comparison) ? item.values : [item.text],
              item.comparison === 'not-in' ? 'nor' : 'or'
            )
          }))
        }))
      }
    }),
    owners: makeOwners({
      query: ownerQuery,
      selected: selections,
      selfSelected: includes('alex', draft.owners),
      warningCount: filter(person => person.status === 'deactivated', selections).length,
      suggestions: map(
        (person: Person) => ({...person, onSelect: () => addOwner(person.id)}),
        filter(
          person =>
            ownerQuery.length > 0 &&
            person.status !== 'deactivated' &&
            !includes(person.id, draft.owners) &&
            some(
              value => value.toLowerCase().includes(ownerQuery.toLowerCase()),
              [person.name, person.login]
            ),
          people
        )
      ),
      onSearch: setOwnerQuery,
      onAddMe: () => addOwner('alex')
    }),
    preview:
      draft.groups.length === 0
        ? {
            rows: [],
            columns: [],
            empty: {
              title: 'No preview yet',
              message: 'Add a membership condition to see matching learners.'
            }
          }
        : {
            ...preview,
            resultLabel: '5 example learners',
            sampleLabel: 'Here is a sample of 5 learners who match the example conditions above.',
            stale: previewError,
            error: previewError ? 'Preview update failed. The last sample is kept.' : undefined,
            retry: previewError
              ? {label: 'Update preview', onClick: () => setPreviewError(false)}
              : undefined
          },
    feedback: saveError
      ? {type: 'error', message: 'Save failed. Your draft is kept; try Save again.'}
      : savedFeedback
  });
  const save = () => {
    if (!valid || !dirty) return;
    if (failNext) {
      setFailNext(false);
      setSaveError(true);
      return;
    }
    setSaved(draft);
    setMode('edit');
    setSaveError(false);
    setLastSaved(true);
  };
  if (mode === 'list')
    return (
      <div style={{padding: 24}}>
        <PopulationList
          labels={listLabels}
          model={makeListModel({
            resultLabel: '1 of 1 population',
            filter: {
              value: 'analytics',
              options: [{value: 'analytics', label: 'Analytics'}],
              onChange: () => undefined
            },
            rows: [
              {
                ...rows[4],
                id: 'analytics-demo',
                typeTag: {label: 'Analytics', type: 'advanced'},
                title: saved.name,
                archived: saved.archived,
                memberLabel: saved.archived ? undefined : '5 example learners',
                conditionGroups: model.conditions.summary.groups,
                ownerInformation: {
                  label: `${saved.owners.length} owners`,
                  ariaLabel: 'Population owners',
                  deactivatedLegend: some({status: 'deactivated'}, selections)
                    ? labels.owners.deactivatedLegend
                    : undefined,
                  items: selections
                },
                primaryAction: {
                  label: saved.archived ? 'View' : 'Edit',
                  onClick: () => {
                    setDraft(saved);
                    setMode('edit');
                  }
                },
                onArchive: saved.archived
                  ? undefined
                  : () => {
                      setSaved(value => ({...value, archived: true}));
                      setDraft(value => ({...value, archived: true}));
                    },
                onReactivate: saved.archived
                  ? () => {
                      setSaved(value => ({...value, archived: false}));
                      setDraft(value => ({...value, archived: false}));
                    }
                  : undefined
              }
            ],
            onCreate: () => {
              setDraft(empty);
              setMode('create');
              setLastSaved(false);
            }
          })}
        />
      </div>
    );
  const Frame = isolated ? IsolatedEditor : EditorShell;
  return (
    <>
      <Frame
        model={model}
        labels={labels}
        header={header({
          model,
          creating: mode === 'create',
          valid,
          dirty,
          onSave: save,
          onClose: () => {
            setDraft(saved);
            setMode('list');
          },
          onWarning: () => setWarningKey(key => key + 1),
          onArchive: () => setConfirming(true),
          onReactivate: () => {
            update({archived: false});
            setSaved(value => ({...value, archived: false}));
          }
        })}
        confirmation={
          confirming
            ? {
                ...confirmation,
                onCancel: () => setConfirming(false),
                onConfirm: () => {
                  setConfirming(false);
                  update({archived: true});
                  setSaved(value => ({...value, archived: true}));
                }
              }
            : undefined
        }
      />
      {isolated ? (
        <aside
          style={{padding: 24, marginTop: 160, display: 'flex', gap: 12, flexWrap: 'wrap'}}
          aria-label="Storybook simulation controls"
        >
          <p>In-memory examples only. Reload resets this demonstration; no API is called.</p>
          <ButtonLink
            label="Create another population"
            type="secondary"
            onClick={() => {
              setDraft(empty);
              setMode('create');
              setLastSaved(false);
            }}
          />
          <ButtonLink
            label="Simulate next save failure"
            type="secondary"
            onClick={() => setFailNext(true)}
            disabled={failNext}
          />
          <ButtonLink
            label="Simulate preview failure"
            type="secondary"
            onClick={() => setPreviewError(true)}
          />
        </aside>
      ) : null}
    </>
  );
}
