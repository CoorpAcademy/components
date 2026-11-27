import React from 'react';
import PropTypes from 'prop-types';
import BrandTable from '../brand-table';
import {
  ConditionsModel,
  PopulationConditionsProps,
  propTypes as conditions
} from '../population-conditions/types';
import {OwnersModel, PopulationOwnersLabels, propTypes as owners} from '../population-owners/types';
import {ArchiveConfirmation, actionPropTypes, propTypes as list} from '../population-list/types';
import {
  PopulationCatalogueAccessProps,
  propTypes as catalogue
} from '../population-catalogue-access/types';
import {
  PopulationResponsiblesProps,
  propTypes as responsibles
} from '../population-responsibles/types';

export type ReadAction = {label: string; disabled?: boolean; onClick(): void};
// App schedules evaluations and supplies their result, freshness and ready-to-render cells.
export type PreviewModel = {
  loading?: boolean;
  stale?: boolean;
  error?: string;
  resultLabel?: string;
  sampleLabel?: string;
  evaluatedAtLabel?: string;
  rows: NonNullable<React.ComponentProps<typeof BrandTable>['rows']>;
  columns: NonNullable<React.ComponentProps<typeof BrandTable>['columns']>;
  empty?: {title: string; message: string};
  retry?: ReadAction;
};
export type TypeFieldModel = {
  id: string;
  label: string;
  disabled?: boolean;
  choices: Array<{
    id: string;
    title: string;
    description: string;
    checked: boolean;
    disabled?: boolean;
    onChange(checked: boolean): void;
  }>;
};
export type SectionName =
  | 'identification'
  | 'conditions'
  | 'owners'
  | 'catalogue'
  | 'responsibles'
  | 'preview';
export type EditorModel = {
  loaded: boolean;
  archived: boolean;
  busy: boolean;
  name: {value: string; error?: string; onChange(value: string): void};
  conditions: ConditionsModel;
  // App supplies the sections appropriate to the chosen type, and locks type after saving.
  typeField?: TypeFieldModel;
  owners?: OwnersModel;
  catalogue?: PopulationCatalogueAccessProps['model'];
  responsibles?: PopulationResponsiblesProps['model'];
  preview?: PreviewModel;
  loadError?: {message: string; retry?: ReadAction};
  feedback?: {type: 'success' | 'error' | 'warning' | 'info'; message: string; retry?: ReadAction};
  focusSection?: SectionName;
  focusRequestKey?: string | number;
};
export type PopulationEditionLabels = {
  identification: string;
  identificationDescription: string;
  name: string;
  typeDescription: string;
  loading: string;
  conditions: PopulationConditionsProps['labels'];
  owners: PopulationOwnersLabels;
  catalogue?: PopulationCatalogueAccessProps['labels'];
  responsibles?: PopulationResponsiblesProps['labels'];
  preview: {
    title: string;
    description: string;
    loading: string;
    stale: string;
    table: string;
  };
};
export type PopulationEditionProps = {
  model: EditorModel;
  labels: PopulationEditionLabels;
  confirmation?: ArchiveConfirmation;
  disabled?: boolean;
  headerOffset?: number;
};

const action = PropTypes.shape(actionPropTypes);
// Child models are required by their own components, but these editor sections are optional.
const optional =
  <T>(validator: PropTypes.Validator<T>): PropTypes.Validator<T | undefined> =>
  (props, name, ...args) =>
    props[name] === undefined ? null : validator(props, name, ...args);
export const propTypes = {
  model: PropTypes.shape({
    loaded: PropTypes.bool.isRequired,
    archived: PropTypes.bool.isRequired,
    busy: PropTypes.bool.isRequired,
    name: PropTypes.shape({
      value: PropTypes.string.isRequired,
      error: PropTypes.string,
      onChange: PropTypes.func.isRequired
    }).isRequired,
    conditions: conditions.model,
    typeField: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      choices: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          checked: PropTypes.bool.isRequired,
          disabled: PropTypes.bool,
          onChange: PropTypes.func.isRequired
        }).isRequired
      ).isRequired
    }),
    owners: optional(owners.model),
    catalogue: optional(catalogue.model),
    responsibles: optional(responsibles.model),
    preview: PropTypes.shape({
      loading: PropTypes.bool,
      stale: PropTypes.bool,
      error: PropTypes.string,
      resultLabel: PropTypes.string,
      sampleLabel: PropTypes.string,
      evaluatedAtLabel: PropTypes.string,
      // Child validators are absent in optimized builds; reuse them when available in dev.
      rows: BrandTable.propTypes.rows?.isRequired,
      columns: BrandTable.propTypes.columns?.isRequired,
      empty: PropTypes.shape({
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
      }),
      retry: action
    }),
    loadError: PropTypes.shape({message: PropTypes.string.isRequired, retry: action}),
    feedback: PropTypes.shape({
      type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
      message: PropTypes.string.isRequired,
      retry: action
    }),
    focusSection: PropTypes.oneOf([
      'identification',
      'conditions',
      'owners',
      'catalogue',
      'responsibles',
      'preview'
    ]),
    focusRequestKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  labels: PropTypes.shape({
    identification: PropTypes.string.isRequired,
    identificationDescription: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    typeDescription: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
    conditions: conditions.labels,
    owners: owners.labels,
    catalogue: optional(catalogue.labels),
    responsibles: optional(responsibles.labels),
    preview: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      loading: PropTypes.string.isRequired,
      stale: PropTypes.string.isRequired,
      table: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  confirmation: list.confirmation,
  disabled: PropTypes.bool,
  headerOffset: PropTypes.number
};
