import React from 'react';
import PropTypes from 'prop-types';
import {noop, getOr, kebabCase, keys} from 'lodash/fp';
import Sidebar from '../sidebar';
import Provider from '../../atom/provider';
import Loader from '../../template/app-player/loading';
import DashboardPopin from './dashboard-popin';
import style from './style.css';

const currentDashboardSidebarSection = ({
  currentDashboard,
  onUpdateVersion,
  onUpdateField,
  inputParams
}) => {
  const dashboardDescription = {
    title: currentDashboard.name,
    type: 'info',
    value: currentDashboard.description
  };
  const dashboardVersion = {
    title: 'Version',
    type: 'select',
    name: 'version-field',
    onChange: onUpdateVersion,
    options: keys(currentDashboard.versions).map(v => ({
      name: v,
      value: v,
      selected: v === currentDashboard.currentVersion
    }))
  };
  const paramInputs = currentDashboard.schema.map(schema => ({
    title: schema,
    name: `${kebabCase(schema)}-field`,
    type: 'inputtext',
    onChange: newValue => onUpdateField(schema, newValue),
    value: getOr('', schema, inputParams)
  }));
  return [dashboardDescription, ...paramInputs, dashboardVersion];
};

const Dashboard = (props, context) => {
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

Dashboard.propTypes = {
  url: PropTypes.string,
  error: PropTypes.string,
  selected: PropTypes.shape({
    name: PropTypes.string
  })
};

Dashboard.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

const ErrorPopin = ({onErrorRedirect, ctaLabel, error}, {translate}) => {
  return error ? (
    <DashboardPopin
      header={translate('An Error Occurred')}
      ctaLabel={ctaLabel}
      ctaOnClick={onErrorRedirect}
      closeOnClick={onErrorRedirect}
    >
      <p>{error}</p>
    </DashboardPopin>
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

const BrandDashboard = (props, context) => {
  const {
    dashboards = [],
    currentDashboard,
    onUpdateVersion = noop,
    onUpdateField = noop,
    onErrorRedirect = noop,
    inputParams = {},
    url,
    error
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

  const sidebarItems = [];
  if (currentDashboard) {
    sidebarItems.push(
      currentDashboardSidebarSection({
        currentDashboard,
        onUpdateVersion,
        onUpdateField,
        inputParams
      })
    );
  }

  return (
    <div className={style.container}>
      <Sidebar items={sidebarItems} />
      <div className={style.dashboardContent}>
        <Dashboard error={error} selected={currentDashboard} url={url} />
        <ErrorPopin
          ctaLabel={translate('Back to Dashboard Home')}
          error={error}
          onErrorRedirect={onErrorRedirect}
        />
      </div>
    </div>
  );
};

BrandDashboard.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

BrandDashboard.propTypes = {
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
  url: PropTypes.string,
  error: PropTypes.string,
  onUpdateVersion: PropTypes.func,
  onUpdateField: PropTypes.func,
  onErrorRedirect: PropTypes.func,
  inputParams: PropTypes.shape({})
};

export default BrandDashboard;
