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
import Popine from './popine';
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

const DashboardPreview = Layout((props, context) => {
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
  console.log('CONTEXT', context);
  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);

  if (!dashboards || dashboards.length === 0) {
    if (error)
      return (
        <Popine
          header="Error Happened"
          ctaLabel="Reload"
          content={`<p>${error}</p>`}
          ctaOnClick={onErrorRedirect}
          closeOnClick={onErrorRedirect}
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

  const selectedDashboard = () => {
    if (url) return <iframe src={url} className={style.dashboardIframe} frameBorder="0" />;
    if (!error) return <Loader />;
  };
  const unselectedDashboard = () =>
    error
      ? null
      : <div className={style.dashboardNoSelection} style={{color: defaultColor}}>
          Select a dashboard on the Sidebar
        </div>;
  return (
    <div className={style.container}>
      <div className={style.dashboardAside}>
        <Sidebar items={sidebar} />
      </div>
      <div className={style.dashboardContent}>
        <h1 className={style.dashboardTitle}>
          {currentDashboard ? currentDashboard.name : 'No Selected Dashboard'}
        </h1>
        {currentDashboard ? selectedDashboard() : unselectedDashboard()}
        {error
          ? <Popine
              header="Error Happened"
              ctaLabel="Redirect to dashboards home"
              content={`<p>${error}</p>`}
              ctaOnClick={onErrorRedirect}
              closeOnClick={onErrorRedirect}
            />
          : null}
      </div>
    </div>
  );
}, {
  skin: Provider.childContextTypes.skin
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
