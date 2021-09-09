import React from 'react';
import PropTypes from 'prop-types';
import {noop, getOr} from 'lodash/fp';
import Sidebar from '../sidebar';
import Provider from '../../atom/provider';
import Loader from '../../template/app-player/loading';
import AnalyticsPopin from './analytics-popin';
import style from './style.css';

const Analytics = (props, context) => {
  const {url, error, selected} = props;
  const {skin, translate} = context;
  const body = () => {
    if (selected) {
      if (url) return <iframe src={url} className={style.dashboardIframe} frameBorder="0" />;
      if (!error) return <Loader />;
    } else if (!error) {
      return (
        <div
          className={style.dashboardNoSelection}
          style={{color: getOr('#00B0FF', 'common.primary', skin)}}
        >
          {translate('Select a dashboard in the Sidebar')}
        </div>
      );
    }
    return null;
  };
  return (
    <div className={style.dashboardSelection}>
      <h1 className={style.dashboardTitle}>
        {getOr(translate('No Selected Dashboard'), 'name', selected)}
      </h1>
      {body()}
    </div>
  );
};

Analytics.propTypes = {
  url: PropTypes.string,
  error: PropTypes.string,
  selected: PropTypes.shape({
    name: PropTypes.string
  })
};

Analytics.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

const ErrorPopin = ({onErrorRedirect, ctaLabel, error}, {translate}) => {
  return error ? (
    <AnalyticsPopin
      header={translate('An Error Occurred')}
      ctaLabel={ctaLabel}
      ctaOnClick={onErrorRedirect}
      closeOnClick={onErrorRedirect}
    >
      <p>{error}</p>
    </AnalyticsPopin>
  ) : null;
};

ErrorPopin.propTypes = {
  onErrorRedirect: PropTypes.func.isRequired,
  ctaLabel: PropTypes.string.isRequired,
  error: PropTypes.string
};

ErrorPopin.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const BrandAnalytics = (props, context) => {
  const {
    dashboards = [],
    currentDashboard,
    onErrorRedirect = noop,
    url,
    error,
    sidebarItems
  } = props;

  const {translate} = context;

  if (!dashboards || dashboards.length === 0) {
    if (error)
      return (
        <ErrorPopin
          ctaLabel={translate('Reload')}
          error={error}
          onErrorRedirect={onErrorRedirect}
        />
      );
    return <Loader />;
  }

  return (
    <div>
      <Sidebar items={sidebarItems} />
      <div className={style.dashboardContent}>
        <Analytics error={error} selected={currentDashboard} url={url} />
        <ErrorPopin
          ctaLabel={translate('Back to Dashboard Home')}
          error={error}
          onErrorRedirect={onErrorRedirect}
        />
      </div>
    </div>
  );
};

BrandAnalytics.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

BrandAnalytics.propTypes = {
  dashboards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      description: PropTypes.string.isRequired
    })
  ),
  currentDashboard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currentVersion: PropTypes.string.isRequired,
    versions: PropTypes.shape({}).isRequired,
    schema: PropTypes.arrayOf(PropTypes.string)
  }),
  sidebarItems: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }),
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        option: PropTypes.bool.isRequired
      }),
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func
      })
    ])
  ),
  url: PropTypes.string,
  error: PropTypes.string,
  onErrorRedirect: PropTypes.func,
  inputParams: PropTypes.shape({})
};

export default BrandAnalytics;
