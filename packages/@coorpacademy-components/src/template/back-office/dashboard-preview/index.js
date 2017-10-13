import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import Layout from '../layout';
import Sidebar from '../../../organism/sidebar';
import style from './style.css';

const defaultInputParam = {
  platform: 'up',
  provider: 'ALL',
  population_ref: 'ALL'
};

const DashboardPreview = Layout(props => {
  const {
    dashboards = [],
    currentDashboard,
    onSelectDashboard = noop,
    onUpdateVersion = noop,
    onUpdateField = noop
  } = props;

  if (!currentDashboard) return <p>Loading...</p>;

  const dahsboardList = dashboards.map(d => ({
    title: d.name,
    type: 'link',
    onClick: onSelectDashboard,
    selected: d.name === currentDashboard.name
  }));

  const dashboardDescription = {
    title: currentDashboard.name,
    type: 'info',
    value: currentDashboard.description
  };
  const dashboardVersion = {
    title: 'Version',
    type: 'select',
    onChange: onUpdateVersion,
    options: Object.keys(currentDashboard.versions).map(v => ({
      name: v,
      value: currentDashboard.versions[v],
      selected: v === currentDashboard.currentVersion
    }))
  };
  const paramInputs = currentDashboard.schema.map(schema => ({
    title: schema,
    type: 'inputtext',
    onChange: onUpdateField,
    defaultValue: defaultInputParam[schema]
  }));

  return (
    <div className={style.container}>
      <Sidebar items={[dahsboardList, [dashboardDescription, ...paramInputs, dashboardVersion]]} />
      <h1>
        {currentDashboard.name}
      </h1>
      <iframe href={currentDashboard.url} />
    </div>
  );
});

export default DashboardPreview;
