import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import kebabCase from 'lodash/fp/kebabCase';
import Layout from '../layout';
import Sidebar from '../../../organism/sidebar';
import Provider from '../../../atom/provider';
import Loader from '../../app-player/loading';
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
    options: Object.keys(currentDashboard.versions).map(v => ({
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
    value: getOr('', 'schema', inputParams)
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
          {translate('dashboard_select')}
        </div>
      );
    }
    return null;
  };
  return (
    <div className={style.dashboardSelection}>
      <h1 className={style.dashboardTitle}>
        {getOr(translate('dashboard_unselected'), 'name', selected)}
      </h1>
      {body()}
    </div>
  );
};
Dashboard.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

const ErrorPopin = ({onErrorRedirect, ctaLabel, error}, {translate}) => {
  return error
    ? <DashboardPopin
        header={translate('dashboard_error')}
        ctaLabel={ctaLabel}
        ctaOnClick={onErrorRedirect}
        closeOnClick={onErrorRedirect}
      >
        <p>{error}</p>
      </DashboardPopin>
    : null;
};

ErrorPopin.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const DashboardPreview = (props, context) => {
  const {
    dashboards = [],
    currentDashboard,
    onSelectDashboard = noop,
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

  const dahsboardList = dashboards.map(d => ({
    title: d.name,
    name: `${kebabCase(d.name)}-link`,
    type: 'link',
    onClick: () => onSelectDashboard(kebabCase(d.name)),
    selected: d.name === get('name', currentDashboard)
  }));

  const sidebarItems = [dahsboardList];
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
      <div className={style.dashboardAside}>
        <Sidebar items={sidebarItems} />
      </div>
      <div className={style.dashboardContent}>
        <Dashboard error={error} selected={currentDashboard} url={url} />
        <ErrorPopin
          ctaLabel={translate('dashboard_redirect')}
          error={error}
          onErrorRedirect={onErrorRedirect}
        />
      </div>
    </div>
  );
};
DashboardPreview.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

DashboardPreview.propTypes = {
  dashboards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
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
  onSelectDashboard: PropTypes.func,
  onUpdateVersion: PropTypes.func,
  onUpdateField: PropTypes.func,
  onErrorRedirect: PropTypes.func,
  inputParams: PropTypes.shape({})
};

export default Layout(DashboardPreview);
