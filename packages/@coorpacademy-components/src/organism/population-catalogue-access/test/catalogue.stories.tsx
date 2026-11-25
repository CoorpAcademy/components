import React from 'react';
import {map} from 'lodash/fp';
import PopulationCatalogueAccess from '..';
import {COLORS} from '../../../variables/colors';
import {
  catalogueLabels,
  cataloguePlaylists,
  errors,
  loading,
  makeChoices,
  makeModel,
  warnings
} from '../../../test/helpers/population-catalogue-access';
import ControlledCatalogue from './helpers/controlled';

export default {title: 'Organism/PopulationCatalogueAccess/HR catalogue access'};

const frame: React.CSSProperties = {
  maxWidth: 1080,
  margin: '24px auto',
  padding: 24,
  border: `1px solid ${COLORS.cm_grey_100}`,
  borderRadius: 16,
  color: COLORS.cm_grey_700,
  fontFamily: 'Gilroy, sans-serif'
};

export const ChooseAccess = () => (
  <div style={frame}>
    <ControlledCatalogue startWithNoChoice />
  </div>
);

export const SelectedPlaylists = () => (
  <div style={frame}>
    <ControlledCatalogue />
  </div>
);

export const EmptyPlaylistWarning = () => (
  <div style={frame}>
    <PopulationCatalogueAccess model={warnings} labels={catalogueLabels} />
  </div>
);

export const SixtySelectedPlaylists = () => (
  <div style={frame}>
    <ControlledCatalogue initialIds={map('id', cataloguePlaylists)} />
  </div>
);

export const CountsUnavailable = () => (
  <div style={frame}>
    <PopulationCatalogueAccess model={loading} labels={catalogueLabels} />
  </div>
);

export const RetryErrors = () => (
  <div style={frame}>
    <PopulationCatalogueAccess model={errors} labels={catalogueLabels} />
  </div>
);

export const CustomPlaylistsOnly = () => (
  <div style={frame}>
    <PopulationCatalogueAccess
      model={makeModel({choices: makeChoices('custom'), selection: undefined})}
      labels={catalogueLabels}
    />
  </div>
);

export const SearchWithoutResults = () => (
  <div style={frame}>
    <ControlledCatalogue initialQuery="No matching playlist" />
  </div>
);

export const ReadOnly = () => (
  <div style={frame}>
    <PopulationCatalogueAccess disabled model={warnings} labels={catalogueLabels} />
  </div>
);
