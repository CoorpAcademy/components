import {map, noop} from 'lodash/fp';
import {EditorModel, TypeFieldModel} from '../../organism/population-edition/types';
import {labels, makeEditor, creation, header} from './population-edition';
import {
  catalogueLabels,
  makeModel as makeCatalogue,
  creation as catalogueCreation,
  warnings
} from './population-catalogue-access';
import {
  responsibleLabels,
  creationLabels,
  makeModel as makeResponsibles
} from './population-responsibles';

// Synthetic App view models only: the production editor has no population-type policy.
export type PopulationType = 'rh' | 'analytics';
export const typeChoices = [
  {
    id: 'analytics',
    title: 'Analytics',
    description: labels.typeDescription
  },
  {
    id: 'rh',
    title: 'HR',
    description: 'HR populations determine which content their learners can access.'
  }
];
export const makeTypeField = (
  selected?: PopulationType,
  onChange: (type: PopulationType) => void = noop,
  disabled = false
): TypeFieldModel => ({
  id: 'population-type',
  label: 'Population type',
  disabled,
  choices: map(
    choice => ({
      ...choice,
      checked: choice.id === selected,
      onChange: (checked: boolean) => {
        if (checked) onChange(choice.id as PopulationType);
      }
    }),
    typeChoices
  )
});
export const hrLabels = {
  ...labels,
  typeDescription: typeChoices[1].description,
  catalogue: catalogueLabels,
  responsibles: responsibleLabels
};
export const hrCreationLabels = {...hrLabels, responsibles: creationLabels};
export const makeHR = (overrides: Partial<EditorModel> = {}): EditorModel => {
  const model: EditorModel = {
    ...makeEditor(),
    name: {value: 'Finance teams', onChange: noop},
    owners: undefined,
    typeField: makeTypeField('rh', noop, true),
    catalogue: makeCatalogue(),
    responsibles: makeResponsibles()
  };
  return {...model, ...overrides};
};
export const hrCreation = makeHR({
  ...creation,
  owners: undefined,
  typeField: makeTypeField('rh'),
  catalogue: catalogueCreation,
  responsibles: makeResponsibles({
    users: [],
    countLabel: undefined,
    evaluatedAtLabel: undefined,
    refresh: undefined
  })
});
export const chooseType = {
  ...hrCreation,
  typeField: makeTypeField(),
  catalogue: undefined,
  responsibles: undefined
};
export const hrWarnings = makeHR({catalogue: warnings});
export const hrHeader = (options: Parameters<typeof header>[0]) => ({
  ...header(options),
  titleTags: [{label: 'HR', type: 'info' as const}],
  warning: options.model.catalogue?.warning
    ? {
        label: 'Review empty playlists',
        onClick: options.onWarning || noop,
        disabled: options.model.busy || !options.model.loaded
      }
    : undefined
});
