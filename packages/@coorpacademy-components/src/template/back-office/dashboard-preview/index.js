import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import get from 'lodash/fp/get';
import kebabCase from 'lodash/fp/kebabCase';
import Layout from '../layout';
import Sidebar from '../../../organism/sidebar';
import Popin from '../../../organism/popin';
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
    onChange: onUpdateVersion,
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
    onErrorRedirect = noop,
    inputParams = {},
    url,
    error
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

  const selectedDashboard = () =>
    url
      ? <iframe src={url} className={style.dashboardIframe} />
      : <div className={style.loading}><Loader /></div>;

  return (
    <div className={style.container}>
      <div className={style.dashboardAside}>
        <Sidebar items={sidebar} />
      </div>
      <div className={style.dashboardContent}>
        <h1 className={style.dashboardTitle}>
          {currentDashboard ? currentDashboard.name : 'No Selected Dashboard'}
        </h1>
        {currentDashboard && !error ? selectedDashboard() : <div>Select a dashboard on the Sidebar</div>}
        {error ? <Popin
          header="Error Happened"
          ctaLabel="Redirect to dashboards home"
          content={`<p>${error}</p>`}
          ctaOnClick={onErrorRedirect}
          closeOnClick={onErrorRedirect}
        /> : null}
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
    schema: PropTypes.arrayOf(PropTypes.string)
  }),
  url: PropTypes.string,
  onSelectDashboard: PropTypes.func,
  onUpdateVersion: PropTypes.func,
  onUpdateField: PropTypes.func,
  onErrorRedirect: PropTypes.func,
  inputParams: PropTypes.shape({})
};

export default DashboardPreview;
