import {noop} from 'lodash/fp';
import {HeaderWithActionsProps} from '../../organism/header-with-actions/types';
import {
  EditorModel,
  PopulationEditionLabels,
  PreviewModel
} from '../../organism/population-edition/types';
import {
  labels as conditionLabels,
  makeModel as makeConditions,
  preserved
} from './population-conditions';
import {ownerLabels, makeModel as makeOwners} from './population-owners';

// Synthetic, ready-to-render App props. No production locale or condition codec lives here.
export const labels: PopulationEditionLabels = {
  identification: 'Identification',
  identificationDescription: 'Give this population a name.',
  name: 'Name',
  typeDescription:
    'Analytics populations group learners within an organization for reporting. They do not partition access to content.',
  loading: 'Loading population…',
  conditions: conditionLabels,
  owners: ownerLabels,
  preview: {
    title: 'Learner preview',
    description: 'Check the learners and profile fields that match the conditions above.',
    loading: 'Updating learner preview…',
    stale:
      'This sample belongs to the previous conditions. Update the preview to check the current conditions.',
    table: 'Matching learner sample'
  }
};
export const preview: PreviewModel = {
  resultLabel: '84 matching learners',
  sampleLabel: 'Here is a sample of 5 learners who match the conditions above.',
  evaluatedAtLabel: 'Checked on 25 November 2026 at 10:30',
  columns: ['First name', 'Last name', 'Login', 'Email', 'Department'].map(title => ({title})),
  rows: [
    ['Alex', 'Martin', 'alex.martin', 'alex.martin@example.org', 'Finance'],
    ['Morgan', 'Taylor', 'morgan.taylor', 'morgan.taylor@example.org', 'Legal'],
    ['Charlie', 'Brown', 'charlie.brown', 'charlie.brown@example.org', 'Finance'],
    ['Sam', 'Wilson', 'sam.wilson', 'sam.wilson@example.org', 'Legal'],
    ['Jamie', 'Lee', 'jamie.lee', 'jamie.lee@example.org', 'Finance']
  ].map(fields => ({fields}))
};
const defaultEditor: EditorModel = {
  loaded: true,
  archived: false,
  busy: false,
  name: {value: 'Onboarding progress', onChange: noop},
  conditions: makeConditions(),
  owners: makeOwners(),
  preview
};
export const makeEditor = (overrides: Partial<EditorModel> = {}): EditorModel => ({
  ...defaultEditor,
  ...overrides
});
export const creation = makeEditor({
  name: {value: '', onChange: noop},
  conditions: makeConditions({
    groups: [],
    summary: {groups: [], labels: makeConditions().summary.labels}
  }),
  owners: makeOwners({selected: [], selfSelected: false, warningCount: 0}),
  preview: {
    rows: [],
    columns: [],
    empty: {
      title: 'No preview yet',
      message: 'Add a membership condition to see a sample of matching learners.'
    }
  }
});
export const legacy = makeEditor({conditions: preserved});
export const zero = makeEditor({
  preview: {
    rows: [],
    columns: preview.columns,
    resultLabel: '0 matching learners',
    empty: {
      title: 'No learners match yet',
      message: 'You can save this population. Future accounts can match these conditions.'
    }
  }
});
export const header = ({
  model,
  dirty = true,
  valid = true,
  creating = false,
  onSave = noop,
  onArchive = noop,
  onReactivate = noop,
  onWarning = noop,
  onClose = noop
}: {
  model: EditorModel;
  dirty?: boolean;
  valid?: boolean;
  creating?: boolean;
  onSave?(): void;
  onArchive?(): void;
  onReactivate?(): void;
  onWarning?(): void;
  onClose?(): void;
}): HeaderWithActionsProps => ({
  title: creating ? 'Create population' : model.name.value,
  titleTags: [{label: 'Analytics', type: 'advanced'}],
  closeButton: {'aria-label': 'Back to populations', onClick: onClose},
  tag: model.archived ? {label: 'Archived', type: 'warning', size: 'S'} : undefined,
  saveStatus: {display: !model.archived && !creating, label: dirty ? 'Unsaved changes' : 'Saved'},
  warning: model.owners.warning
    ? {
        label: 'Review deactivated owners',
        onClick: onWarning,
        disabled: !model.loaded || model.busy
      }
    : undefined,
  actionButtons: model.archived
    ? [{type: 'primary', label: 'Reactivate', disabled: model.busy, onClick: onReactivate}]
    : [
        ...(creating
          ? []
          : [
              {
                type: 'dangerous' as const,
                label: 'Archive',
                disabled: model.busy || !model.loaded,
                onClick: onArchive
              }
            ]),
        {
          type: 'primary',
          label: 'Save',
          disabled: !model.loaded || !valid || !dirty || model.busy,
          onClick: onSave
        }
      ]
});
