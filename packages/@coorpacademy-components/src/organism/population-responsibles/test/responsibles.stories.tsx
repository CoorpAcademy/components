import React from 'react';
import PopulationResponsibles from '..';
import {COLORS} from '../../../variables/colors';
import ControlledResponsibles from './helpers/controlled';
import defaults from './fixtures/default';
import creation from './fixtures/creation';
import empty from './fixtures/empty';
import loading from './fixtures/loading';
import loadingMore from './fixtures/loading-more';
import paginationError from './fixtures/pagination-error';
import initialError from './fixtures/initial-error';
import refreshError from './fixtures/refresh-error';
import longNames from './fixtures/inactive-and-long-names';
import disabled from './fixtures/disabled';
import unknownCount from './fixtures/unknown-count';

export default {title: 'Organism/PopulationResponsibles/HR managers'};

const Frame = ({children}: {children: React.ReactNode}) => (
  <div
    style={{
      margin: 20,
      padding: 24,
      border: `1px solid ${COLORS.cm_grey_100}`,
      borderRadius: 20,
      color: COLORS.cm_grey_700,
      fontFamily: 'Gilroy, sans-serif'
    }}
  >
    {children}
  </div>
);

export const AppliedManagers = () => <Frame><PopulationResponsibles {...defaults.props} /></Frame>;
export const ControlledPagination = () => <Frame><ControlledResponsibles /></Frame>;
export const FailedPageAndRetry = () => <Frame><ControlledResponsibles failFirstPage /></Frame>;
export const BeforeFirstMembershipUpdate = () => <Frame><PopulationResponsibles {...creation.props} /></Frame>;
export const NoManagers = () => <Frame><PopulationResponsibles {...empty.props} /></Frame>;
export const InitialLoading = () => <Frame><PopulationResponsibles {...loading.props} /></Frame>;
export const LoadingNextPage = () => <Frame><PopulationResponsibles {...loadingMore.props} /></Frame>;
export const InitialError = () => <Frame><PopulationResponsibles {...initialError.props} /></Frame>;
export const NextPageError = () => <Frame><PopulationResponsibles {...paginationError.props} /></Frame>;
export const RefreshError = () => <Frame><PopulationResponsibles {...refreshError.props} /></Frame>;
export const InactiveAndLongNames = () => <Frame><PopulationResponsibles {...longNames.props} /></Frame>;
export const DisabledActions = () => <Frame><PopulationResponsibles {...disabled.props} /></Frame>;
export const UnknownCount = () => <Frame><PopulationResponsibles {...unknownCount.props} /></Frame>;
