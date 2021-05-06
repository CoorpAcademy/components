import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';
import Breadcrumbs from '../../../molecule/breadcrumbs';
import BrandTabs from '../../../molecule/brand-tabs';
import Sidebar from '../../../organism/sidebar';
import BrandForm from '../../../organism/brand-form';
import BrandTable from '../../../organism/brand-table';
import BrandUpload from '../../../organism/brand-upload';
import Notification from '../../../atom/notification';
import Loader from '../../../atom/loader';
import Layout from '../layout';
import style from './style.css';

const BrandUpdate = Layout(props => {
  const {notifications, links, breadcrumbs, tabs, content, details, subTabs = []} = props;
  const formattedTabs = tabs.map(({title, name, href, selected}) => ({
    title,
    type: 'link',
    name,
    selected,
    href
  }));

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
    }
  };

  const detailsView = cont => {
    if (!cont) return;
    return <BrandTable {...cont} />;
  };

  return (
    <div className={style.container}>
      <div>
        <Breadcrumbs links={links} breadcrumbs={breadcrumbs} />
      </div>
      <div className={style.notifications}>{notificationsList}</div>
      <div className={style.contentHandler}>
        <div className={style.dashboardAside}>
          <Sidebar items={formattedTabs} />
        </div>
        <div className={style.contentView}>
          {!isEmpty(subTabs) ? <BrandTabs type="light" tabs={subTabs} /> : null}
          <div className={style.dashboardContent}>
            <div>{contentView(content)}</div>
            <div>{detailsView(details)}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

BrandUpdate.defaultProps = {
  notifications: []
};

BrandUpdate.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape(Notification.propTypes)),
  breadcrumbs: Breadcrumbs.propTypes.breadcrumbs,
  links: Breadcrumbs.propTypes.links,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ).isRequired,
  subTabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ),
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
    })
  ]),
  details: PropTypes.shape({
    ...BrandTable.propTypes,
    key: PropTypes.string,
    type: PropTypes.oneOf(['list'])
  })
};

export default BrandUpdate;
