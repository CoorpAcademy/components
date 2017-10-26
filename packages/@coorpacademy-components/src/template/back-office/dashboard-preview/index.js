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
    value: inputParams[schema] || ''
  }));
  return [dashboardDescription, ...paramInputs, dashboardVersion];
};

const Dashboard = props => {
  const {url, error, selected, defaultColor} = props;
  const body = () => {
    if (selected) {
      if (url) return <iframe src={url} className={style.dashboardIframe} frameBorder="0" />;
      if (!error) return <Loader />;
    } else if (!error) {
      return (
        <div className={style.dashboardNoSelection} style={{color: defaultColor}}>
          Select a dashboard on the Sidebar
        </div>
      );
    }
    return null;
  };
  return (
    <div>
      <h1 className={style.dashboardTitle}>
        {selected ? selected.name : 'No Selected Dashboard'}
      </h1>
      {body()}
    </div>
  );
};

const ErrorPopin = ({onErrorRedirect, ctaLabel, error}) => {
  return error
    ? <DashboardPopin
        header="Error Happened"
        ctaLabel={ctaLabel}
        content={`<p>${error}</p>`}
        ctaOnClick={onErrorRedirect}
        closeOnClick={onErrorRedirect}
      />
    : null;
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
  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);

  if (!dashboards || dashboards.length === 0) {
    if (error)
      return <ErrorPopin ctaLabel="Reload" error={error} onErrorRedirect={onErrorRedirect} />;
    return <Loader />;
  }

  const dahsboardList = dashboards.map(d => ({
    title: d.name,
    name: `${kebabCase(d.name)}-link`,
    type: 'link',
    onClick: () => onSelectDashboard(kebabCase(d.name)),
    selected: d.name === get('name', currentDashboard)
  }));

  const sidebar = [dahsboardList];
  if (currentDashboard) {
    sidebar.push(
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
      <Sidebar items={sidebar} className={style.dashboardAside} />
      <Dashboard
        className={style.dashboardContent}
        defaultColor={defaultColor}
        error={error}
        selected={currentDashboard}
        url={url}
      />
      <ErrorPopin
        ctaLabel="Redirect to Dashboard Home"
        error={error}
        onErrorRedirect={onErrorRedirect}
      />
    </div>
  );
};
DashboardPreview.contextTypes = {
  skin: Provider.childContextTypes.skin
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
