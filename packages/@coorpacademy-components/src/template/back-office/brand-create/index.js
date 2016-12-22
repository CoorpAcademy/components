import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import BrandCreateForm from '../../../molecule/brand-create-form';
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
//     title: checker.string,
//     subtitle: checker.string,
//     description: checker.string,
//     field: checker.shape({
//       placeholder: checker.string,
//       label: checker.string,
//       onChange: checker.func,
//       error: checker.string.optional,
//       value: checker.string.optional
//     }),
//     onSubmit: checker.func,
//     submitValue: checker.string,
//     isPending: checker.bool.optional,
//     isModified: checker.bool.optional
//   })
// });

const BrandCreate = Layout((props, children) => {
  const {
    notifications = []
  } = props;

  const notificationsList = notifications.map((notification, index) => {
    return (
      <div key={index} className={style.notification}>
        <Notification {...notification} />
      </div>
    );
  });

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <div className={notifications.length > 0 ? style.notifications : style.empty}>
        {notificationsList}
      </div>
        <BrandCreateForm {...props} />
      </div>
    </div>
  );
});

// BrandCreate.validate = createValidate(conditions);
export default BrandCreate;
