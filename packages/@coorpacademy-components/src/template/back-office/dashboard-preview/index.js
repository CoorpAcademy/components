import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import Layout from '../layout';
import Sidebar from '../../../organism/sidebar';
import Loader from '../../app-player/loading';
import Title from '../../../atom/title';
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

  if (!currentDashboard) return <Loader />;

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
      <div className={style.dashboardAside}>
        <Sidebar
          items={[dahsboardList, [dashboardDescription, ...paramInputs, dashboardVersion]]}
        />
      </div>
      <div className={style.dashboardContent}>
        <h1 className={style.dashboardTitle}>
          {currentDashboard.name}
        </h1>
        <iframe
          src={currentDashboard.url}
          className={style.dashboardIframe}
        />
      </div>
    </div>
  );
});

export default DashboardPreview;
