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
  prototypeReference,
  warnings
} from '../../../test/helpers/population-catalogue-access';
import ControlledCatalogue from './helpers/controlled';

export default {title: 'Organism/PopulationCatalogueAccess/HR catalogue access'};

// Reproduce the editor's section frame without publishing demo CSS in the package.
const Frame = ({children}: {children: React.ReactNode}) => (
  <div
    data-name="population-catalogue-preview"
    style={{
      margin: 20,
      border: `1px solid ${COLORS.cm_grey_100}`,
      borderRadius: 20,
      color: COLORS.cm_grey_700,
      fontFamily: 'Gilroy, sans-serif'
    }}
  >
    <style>
      {
        '[data-name="population-catalogue-preview"] {padding: 28px} @media (max-width: 1100px) {[data-name="population-catalogue-preview"] {padding: 20px}}'
      }
    </style>
    {children}
  </div>
);

export const ChooseAccess = () => (
  <Frame>
    <ControlledCatalogue startWithNoChoice />
  </Frame>
);

export const SelectedPlaylists = () => (
  <Frame>
    <ControlledCatalogue />
  </Frame>
);

export const EmptyPlaylistWarning = () => (
  <Frame>
    <PopulationCatalogueAccess model={warnings} labels={catalogueLabels} />
  </Frame>
);

export const SixtySelectedPlaylists = () => (
  <Frame>
    <ControlledCatalogue initialIds={map('id', cataloguePlaylists)} />
  </Frame>
);

export const CountsUnavailable = () => (
  <Frame>
    <PopulationCatalogueAccess model={loading} labels={catalogueLabels} />
  </Frame>
);

export const RetryErrors = () => (
  <Frame>
    <PopulationCatalogueAccess model={errors} labels={catalogueLabels} />
  </Frame>
);

export const CustomPlaylistsOnly = () => (
  <Frame>
    <PopulationCatalogueAccess
      model={makeModel({choices: makeChoices('custom'), selection: undefined})}
      labels={catalogueLabels}
    />
  </Frame>
);

export const SearchWithoutResults = () => (
  <Frame>
    <ControlledCatalogue initialQuery="No matching playlist" />
  </Frame>
);

export const ReadOnly = () => (
  <Frame>
    <PopulationCatalogueAccess disabled model={warnings} labels={catalogueLabels} />
  </Frame>
);

export const PrototypeReference = () => (
  <Frame>
    <PopulationCatalogueAccess model={prototypeReference} labels={catalogueLabels} />
  </Frame>
);
