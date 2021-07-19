import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import Breadcrumbs from '../../../molecule/breadcrumbs';
import BrandTabs from '../../../molecule/brand-tabs';
import {IconLinkItem, LinkItem} from '../../../organism/sidebar';
import BrandForm from '../../../organism/brand-form';
import BrandTable from '../../../organism/brand-table';
import BrandUpload from '../../../organism/brand-upload';
import BrandDashboard from '../../../organism/brand-dashboard';
import Notification from '../../../atom/notification';
import Loader from '../../../atom/loader';
import Accordion from '../../../organism/accordion/container';
import logo from './logo.svg';
import style from './style.css';

const SubTab = ({title, href, selected}) => {
  return <h5>{title}</h5>;
};

SubTab.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};

const BrandUpdate = props => {
  const {notifications, links, breadcrumbs, tabs, content, details} = props;

  const formattedTabs = tabs.map(({key, title, href, selected, open, type = 'link'}, index) => ({
    title,
    isOpen: open,
    isSelected: selected,
    type,
    href,
    index,
    children: [],
    lessMoreIconType: 'arrow',
    iconType: key || 'arrow'
  }));

  const getStyle = isSelected => (isSelected ? style.selectedElement : style.unselectedElement);

  const subTabsView = (_subTabs = []) =>
    map.convert({cap: false})((subTab, _index) => (
      <div>
        {subTab.type === 'iconLink' ? (
          <IconLinkItem {...subTab} styles={getStyle(subTab.selected)} color={null} uppercase={false} />
        ) : (
          <LinkItem {...subTab} styles={getStyle(subTab.selected)} color={null} uppercase={false} />
        )}
      </div>
    ))(_subTabs);

  const formattedTabsViews = map(tab => (
    <div className={style.subTabs}>{subTabsView(tab.subTabs)}</div>
  ))(tabs);

  const notificationsList = notifications.map((notification, index) => {
    return (
      <div className={style.notification} key={index}>
        <Notification {...notification} />
      </div>
    );
  });

  const contentView = cont => {
    if (!cont) return <Loader />;
    const {type} = cont;
    switch (type) {
      case 'form':
        return <BrandForm {...cont} />;
      case 'list':
        return <BrandTable {...cont} />;
      case 'upload':
        return <BrandUpload {...cont} />;
      case 'dashboard':
        return <BrandDashboard {...cont} />;
    }
  };

  const detailsView = cont => {
    if (!cont) return;
    return <BrandTable {...cont} />;
  };

  return (
    <div className={style.container}>
      <div className={style.dashboardAside}>
        <div style={{margin: '74px 16px'}}>
          <img src={logo} height="32" />
        </div>
        <Accordion tabProps={formattedTabs} type={'all'} theme={'setup'}>
          {formattedTabsViews}
        </Accordion>
      </div>
      <div className={style.contentWrapper}>
        <div>
          <Breadcrumbs links={links} breadcrumbs={breadcrumbs} />
        </div>
        <div className={style.notifications}>{notificationsList}</div>
        <div className={style.contentHandler}>
          <div className={style.contentView}>
            {/* {!isEmpty(subTabs) ? <BrandTabs type="light" tabs={subTabs} /> : null} */}
            <div className={style.dashboardContent}>
              <div>{contentView(content)}</div>
              <div>{detailsView(details)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandUpdate.defaultProps = {
  notifications: []
};

BrandUpdate.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape(Notification.propTypes)),
  breadcrumbs: Breadcrumbs.propTypes.breadcrumbs,
  links: Breadcrumbs.propTypes.links,
  logo: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      open: PropTypes.bool.isRequired,
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
      ...BrandDashboard.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['dashboard'])
    })
  ]),
  details: PropTypes.shape({
    ...BrandTable.propTypes,
    key: PropTypes.string,
    type: PropTypes.oneOf(['list'])
  })
};

export default BrandUpdate;
