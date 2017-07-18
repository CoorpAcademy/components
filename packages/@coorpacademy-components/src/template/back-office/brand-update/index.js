import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../../molecule/breadcrumbs';
import BrandTabs from '../../../molecule/brand-tabs';
import BrandForm from '../../../organism/brand-form';
import BrandTable from '../../../organism/brand-table';
import BrandUpload from '../../../organism/brand-upload';
import Notification from '../../../atom/notification';
import Layout from '../layout';
import style from './style.css';

const BrandUpdate = Layout(props => {
  const {notifications = [], links, breadcrumbs, tabs, content} = props;

  const notificationsList = notifications.map((notification, index) => {
    return (
      <div className={style.notification} key={index}>
        <Notification {...notification} />
      </div>
    );
  });

  const contentView = cont => {
    const {type} = cont;

    switch (type) {
      case 'form':
        return <BrandForm {...cont} />;
      case 'list':
        return <BrandTable {...cont} />;
      case 'upload':
        return <BrandUpload {...cont} />;
      default:
        return null;
    }
  };

  return (
    <div className={style.container}>
      <div>
        <Breadcrumbs links={links} breadcrumbs={breadcrumbs} />
      </div>
      <div>
        <BrandTabs tabs={tabs} />
      </div>
      <div className={style.notifications}>
        {notificationsList}
      </div>
      <div className={style.contentWrapper}>
        {contentView(content)}
      </div>
    </div>
  );
});

BrandUpdate.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      onClose: PropTypes.func
    })
  ),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      type: PropTypes.string
    })
  ),
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ),
  content: PropTypes.shape({
    type: PropTypes.oneOf(['form', 'list', 'upload'])
  }).isRequired
};

export default BrandUpdate;
