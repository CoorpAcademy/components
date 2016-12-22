import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import Breadcrumbs from '../../../molecule/breadcrumbs';
import BrandTabs from '../../../molecule/brand-tabs';
import BrandForm from '../../../organism/brand-form';
import BrandTable from '../../../organism/brand-table';
import BrandUpload from '../../../organism/brand-upload';
import Notification from '../../../atom/notification';
import Layout from '../layout';
import style from './style.css';

// const conditions = checker.shape({
//   props: checker.shape({
//     notifications: checker.arrayOf(checker.shape({
//       type: checker.string,
//       message: checker.string,
//       onClose: checker.func.optional
//     })).optional,
//     breadcrumbs: checker.arrayOf(checker.shape({
//       icon: checker.string.optional,
//       title: checker.string,
//       href: checker.string.optional
//     })),
//     links: checker.arrayOf(checker.shape({
//       title: checker.string,
//       href: checker.string,
//       type: checker.string.optional
//     })),
//     tabs: checker.arrayOf(checker.shape({
//       title: checker.string,
//       href: checker.string,
//       selected: checker.bool.optional
//     })),
//     content: checker.shape({
//       type: checker.oneOf(['form', 'list', 'upload']).optional
//     })
//   })
// });

const BrandUpdate = Layout((props, children) => {
  const {
    notifications,
    links,
    breadcrumbs,
    tabs,
    content
  } = props;

  const notificationsList = notifications.map((notification, index) => {
    return (
      <div className={style.notification} key={index}>
        <Notification {...notification} />
      </div>
    );
  });

  const contentView = cont => {
    const {
      type
    } = cont;

    switch (type) {
      case 'form':
        return (
          <BrandForm {...cont} />
        );
      case 'list':
        return (
          <BrandTable {...cont} />
        );
      case 'upload':
        return (
          <BrandUpload {...cont} />
        );
      default:
        return null;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.headerWrapper}>
        <Breadcrumbs links={links} breadcrumbs={breadcrumbs} />
      </div>
      <div className={style.tabsWrapper}>
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

// BrandUpdate.validate = createValidate(conditions);
export default BrandUpdate;
