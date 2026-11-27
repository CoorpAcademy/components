import React from 'react';
import {header} from '../../../test/helpers/population-edition';
import {hrHeader, hrLabels, makeHR} from '../../../test/helpers/population-hr-edition';
import {makeModel as makeResponsibles} from '../../../test/helpers/population-responsibles';
import {EditorShell} from './helpers/shell';
import ControlledEditor from './helpers/controlled';
import defaults from './fixtures/hr-default';
import creation from './fixtures/hr-creation';
import choose from './fixtures/choose-type';
import archived from './fixtures/hr-archived';
import busy from './fixtures/hr-busy';
import warnings from './fixtures/hr-warnings';

export default {title: 'Organism/PopulationEdition/HR and Analytics editor'};

export const ChoosePopulationType = () => (
  <EditorShell {...choose.props} header={{...header({model: choose.props.model, creating: true, valid: false}), titleTags: []}} />
);
export const CreateHR = () => (
  <EditorShell {...creation.props} header={hrHeader({model: creation.props.model, creating: true, valid: false})} />
);
export const EditHR = () => (
  <EditorShell {...defaults.props} header={hrHeader({model: defaults.props.model})} />
);
export const ArchivedHR = () => (
  <EditorShell {...archived.props} header={hrHeader({model: archived.props.model})} />
);
export const BusyHR = () => (
  <EditorShell {...busy.props} header={hrHeader({model: busy.props.model})} />
);
export const EmptyPlaylistWarning = () => (
  <EditorShell {...warnings.props} header={hrHeader({model: warnings.props.model})} />
);
export const ManagersFailureKeepsPeople = () => {
  const model = makeHR({responsibles: makeResponsibles({error: {message: 'Managers could not be refreshed. The previous list is kept.'}})});
  return <EditorShell model={model} labels={hrLabels} header={hrHeader({model})} />;
};
export const ControlledTypeSelection = () => <ControlledEditor creating bothTypes />;
export const ControlledHRLifecycle = () => <ControlledEditor bothTypes initialType="rh" />;
export const ControlledAnalyticsLifecycle = () => <ControlledEditor bothTypes />;
export const IsolatedTypeSelection = () => <ControlledEditor creating bothTypes isolated />;
export const IsolatedHRLifecycle = () => <ControlledEditor bothTypes initialType="rh" isolated />;
