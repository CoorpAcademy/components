import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import get from 'lodash/fp/get';
import kebabCase from 'lodash/fp/kebabCase';
import Layout from '../layout';
import Sidebar from '../../../organism/sidebar';
import Loader from '../../app-player/loading';
import style from './style.css';

const defaultInputParam = {
  platform: 'up',
  provider: 'ALL',
  population_ref: 'ALL'
};

const currentDashboardSidebarSection = ({
  currentDashboard,
  onUpdateVersion,
  onUpdateField,
  inputParam
}) => {
  const dashboardDescription = {
    title: currentDashboard.name,
    type: 'info',
    value: currentDashboard.description
  };
  const dashboardVersion = {
    title: 'Version',
    type: 'select',
    onChange: selectedVersion => onUpdateVersion(selectedVersion),
    options: Object.keys(currentDashboard.versions).map(v => ({
      name: v,
      value: v,
      selected: v === currentDashboard.currentVersion
    }))
  };
  const paramInputs = currentDashboard.schema.map(schema => ({
    title: schema,
    type: 'inputtext',
    onChange: newValue => onUpdateField(schema, newValue),
    value: inputParam[schema]
  }));
  return [dashboardDescription, ...paramInputs, dashboardVersion];
};

const DashboardPreview = Layout(props => {
  const {
    dashboards = [],
    currentDashboard,
    onSelectDashboard = noop,
    onUpdateVersion = noop,
    onUpdateField = noop,
    inputParams = {}
  } = props;

  if (!dashboards || dashboards.length === 0) return <Loader />;

  const dahsboardList = dashboards.map(d => ({
    title: d.name,
    name: kebabCase(d.name),
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
        inputParam: {...defaultInputParam, ...inputParams}
      })
    );
  }

  return (
    <div className={style.container}>
      <div className={style.dashboardAside}>
        <Sidebar items={sidebar} />
      </div>
      <div className={style.dashboardContent}>
        <h1 className={style.dashboardTitle}>
          {currentDashboard ? currentDashboard.name : 'No Selected Dashboard'}
        </h1>
        {currentDashboard
          ? <iframe src={currentDashboard.url} className={style.dashboardIframe} />
          : <div>Select a dashboard on the Sidebar</div>}
      </div>
    </div>
  );
});

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
    url: PropTypes.string.isRequired,
    schema: PropTypes.arrayOf(PropTypes.string)
  }),
  onSelectDashboard: PropTypes.func,
  onUpdateVersion: PropTypes.func,
  onUpdateField: PropTypes.func,
  inputParams: PropTypes.shape({})
};

export default DashboardPreview;
