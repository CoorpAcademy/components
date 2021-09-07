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
import BrandDashboard from '../../../organism/brand-dashboard';
import Notification from '../../../atom/notification';
import Header from '../../../organism/setup-header';
import Loader from '../../../atom/loader';
import Accordion from '../../../organism/accordion/coorp-manager';
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
  const {notifications, header, items, content, details, onItemClick} = props;
  const logo = 'https://static.coorpacademy.com/logo/coorp-manager.svg';
  const selectedTab = pipe(
    filter(e => e.selected),
    head,
    get('tabs'),
    filter(e => e.selected),
    head
  )(items);

  const formattedTabs = items.map(({key, title, href, selected, type = 'link'}, index) => ({
    title,
    selected,
    type,
    href,
    index,
    children: [],
    iconType: key || 'arrow'
  }));

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

  const formattedTabsViews = map(tab => (
    <div key={tab.title} className={style.tabs}>
      {subTabsView(tab.tabs)}
    </div>
  ))(items);

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
        <div className={style.logo}>
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <Accordion tabProps={formattedTabs} theme={'setup'} onClick={onItemClick}>
          {formattedTabsViews}
        </Accordion>
      </div>
      <div className={style.wrapper}>
        <Header {...header} />
        <div className={style.contentWrapper}>
          <div className={style.notifications}>{notificationsList}</div>
          <div className={style.contentHandler}>
            <div className={style.contentView}>
              {selectedTab && !isEmpty(selectedTab.subTabs) ? (
                <BrandTabs type="light" tabs={selectedTab.subTabs} />
              ) : null}
              <div className={style.dashboardContent}>
                <div>{contentView(content)}</div>
                <div>{detailsView(details)}</div>
              </div>
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
  header: Header.propTypes,
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
      ...BrandDashboard.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['dashboard'])
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
