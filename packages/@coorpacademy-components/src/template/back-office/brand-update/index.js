import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import filter from 'lodash/fp/filter';
import head from 'lodash/fp/head';
import BrandTabs from '../../../molecule/brand-tabs';
import {IconLinkItem, LinkItem} from '../../../organism/sidebar';
import BrandForm from '../../../organism/brand-form';
import BrandTable from '../../../organism/brand-table';
import BrandUpload from '../../../organism/brand-upload';
import BrandAnalytics from '../../../organism/brand-analytics';
import BrandDashboard from '../../../organism/brand-dashboard';
import Banner from '../../../molecule/banner';
import Header from '../../../organism/setup-header';
import Loader from '../../../atom/loader';
import Accordion from '../../../organism/accordion/coorp-manager';
import style from './style.css';

const getStyle = isSelected => (isSelected ? style.selectedElement : style.unselectedElement);

const subTabsView = (_subTabs = []) =>
  map.convert({cap: false})((subTab, _index) => (
    <div key={subTab.title}>
      {subTab.type === 'iconLink' ? (
        <IconLinkItem
          {...subTab}
          styles={getStyle(subTab.selected)}
          uppercase={false}
          target={'_blank'}
        />
      ) : (
        <LinkItem {...subTab} styles={getStyle(subTab.selected)} uppercase={false} />
      )}
    </div>
  ))(_subTabs);

// TODO: this fonction should be replaced by a molecule to avoid this file to be unreadable
const buildLeftNavigation = (logo, items, onItemClick) => {
  const formattedTabs = items.map(({key, title, href, selected, type = 'simpleTab'}, index) => ({
    title,
    selected,
    type,
    href,
    index,
    children: [],
    iconType: key || 'arrow'
  }));

  const formattedTabsViews = map(tab => (
    <div key={tab.title} className={style.tabs}>
      {subTabsView(tab.tabs)}
    </div>
  ))(items);

  return (
    <div className={style.leftMenu}>
      <div className={style.logo}>
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <Accordion tabProps={formattedTabs} theme={'setup'} onClick={onItemClick}>
        {formattedTabsViews}
      </Accordion>
    </div>
  );
};

const buildNotifications = notifications => {
  if (isEmpty(notifications)) {
    return null;
  }

  const notificationsList = notifications.map((notification, index) => {
    return (
      <div className={style.notification} key={index}>
        <Banner {...notification} />
      </div>
    );
  });
  return <div className={style.notifications}>{notificationsList}</div>;
};

const buildHeader = (header, notifications) => {
  const headerStyle = isEmpty(notifications) ? style.header : style.headerForNotifications;
  return (
    <div className={headerStyle}>
      <Header {...header} />
    </div>
  );
};

const buildTabs = items => {
  const selectedTab = pipe(
    filter(e => e.selected),
    head,
    get('tabs'),
    filter(e => e.selected),
    head
  )(items);

  return selectedTab && !isEmpty(selectedTab.subTabs) ? (
    <div>
      <BrandTabs type="light" tabs={selectedTab.subTabs} />
    </div>
  ) : null;
};

const buildContentView = cont => {
  if (!cont) return <Loader />;
  const {type} = cont;
  switch (type) {
    case 'form':
      return <BrandForm {...cont} />;
    case 'list':
      return <BrandTable {...cont} />;
    case 'upload':
      return <BrandUpload {...cont} />;
    case 'analytics-dashboards':
      return <BrandAnalytics {...cont} />;
    case 'home':
      return <BrandDashboard {...cont} />;
  }
};

const buildDetailsView = details => {
  if (!details) return;
  return <BrandTable {...details} />;
};

const BrandUpdate = props => {
  const {notifications, header, items, content, details, onItemClick} = props;
  const logo = 'https://static.coorpacademy.com/logo/coorp-manager.svg';

  const leftNavigation = buildLeftNavigation(logo, items, onItemClick);
  const notificationsView = buildNotifications(notifications);
  const headerView = buildHeader(header, notifications);
  const tabsView = buildTabs(items);
  const contentView = buildContentView(content);
  const detailsView = buildDetailsView(details);

  return (
    <div className={style.container}>
      {leftNavigation}
      <div className={style.contentWrapper}>
        {headerView}
        {notificationsView}
        {tabsView}
        {contentView}
        {detailsView}
      </div>
    </div>
  );
};

BrandUpdate.defaultProps = {
  notifications: []
};

BrandUpdate.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape(Banner.propTypes)),
  header: PropTypes.shape({...Header.propTypes}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      type: PropTypes.string,
      tabs: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
          selected: PropTypes.bool.isRequired,
          type: PropTypes.string,
          subTabs: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              href: PropTypes.string.isRequired,
              selected: PropTypes.bool.isRequired,
              type: PropTypes.string
            })
          )
        })
      )
    })
  ).isRequired,
  content: PropTypes.oneOfType([
    PropTypes.shape({
      ...BrandForm.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['form'])
    }),
    PropTypes.shape({
      ...BrandTable.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['list'])
    }),
    PropTypes.shape({
      ...BrandUpload.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['upload'])
    }),
    PropTypes.shape({
      ...BrandAnalytics.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['analytics-dashboards'])
    }),
    PropTypes.shape({
      ...BrandDashboard.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['home'])
    })
  ]),
  details: PropTypes.shape({
    ...BrandTable.propTypes,
    key: PropTypes.string,
    type: PropTypes.oneOf(['list'])
  }),
  onItemClick: PropTypes.func
};

export default BrandUpdate;
