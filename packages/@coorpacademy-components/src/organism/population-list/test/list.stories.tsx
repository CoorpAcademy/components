import React from 'react';
import {keys} from 'lodash/fp';
import PopulationList from '..';
import {PopulationShell} from './helpers/shell';
import ControlledList from './helpers/controlled';
import defaults from './fixtures/default';
import archived from './fixtures/archived';
import large from './fixtures/large-brand';
import filtered from './fixtures/filtered';
import empty from './fixtures/empty';
import loading from './fixtures/loading';
import loadingMore from './fixtures/loading-more';
import pageError from './fixtures/page-error';
import initialError from './fixtures/initial-error';
import countsError from './fixtures/counts-error';
import detailsError from './fixtures/details-error';
import confirmation from './fixtures/confirmation';
import archiveError from './fixtures/archive-error';
import busy from './fixtures/busy';

export default {title: 'Organism/PopulationList/Population cards'};
export const ActivePopulations = () => <PopulationShell {...defaults.props} active="5" archived="0" />;
export const ArchivedPopulations = () => <PopulationShell {...archived.props} selectedArchived active="2000" archived="5" />;
export const LargeBrand = () => <PopulationShell {...large.props} />;
export const FilteredResultsGlobalBadges = () => <PopulationShell {...filtered.props} />;
export const EmptyArchive = () => <PopulationShell {...empty.props} selectedArchived active="2000" archived="0" />;
export const InitialLoading = () => <PopulationShell {...loading.props} />;
export const LoadingNextPage = () => <PopulationShell {...loadingMore.props} />;
export const FailedNextPage = () => <PopulationShell {...pageError.props} />;
export const InitialError = () => <PopulationShell {...initialError.props} />;
export const UnknownCounts = () => <PopulationShell {...countsError.props} active={null} archived="0" />;
export const DetailsErrors = () => <PopulationShell {...detailsError.props} />;
export const ArchiveConfirmation = () => <PopulationShell {...confirmation.props} />;
export const ArchiveBlocked = () => <PopulationShell {...archiveError.props} />;
export const BusyActions = () => <PopulationShell {...busy.props} />;
export const ControlledArchiveReactivateSearch = () => <ControlledList />;
export const ControlledPaginationAndRetry = () => <ControlledList pagination />;

// Isolated component preview: the existing Backoffice shell is desktop-oriented.
const componentFixtures = {
  default: defaults.props,
  archived: archived.props,
  empty: empty.props,
  filtered: filtered.props,
  loading: loading.props,
  'loading-more': loadingMore.props,
  'page-error': pageError.props,
  'initial-error': initialError.props,
  'counts-error': countsError.props,
  'details-error': detailsError.props,
  confirmation: confirmation.props,
  'archive-error': archiveError.props,
  busy: busy.props
};
export const ComponentOnly = ({scenario = 'default'}: {scenario?: keyof typeof componentFixtures}) => (
  <div style={{padding: 20, maxWidth: 1100, margin: 'auto'}}>
    <PopulationList {...componentFixtures[scenario]} />
  </div>
);
ComponentOnly.args = {scenario: 'default'};
ComponentOnly.argTypes = {scenario: {control: 'select', options: keys(componentFixtures)}};
