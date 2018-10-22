import React from 'react';
import map from 'lodash/fp/map';
import SideNotification from '../../molecule/side-notification';
import {container} from './style.css';

const Notifications = (props, context) => {
  return (
    <div className={container}>
      {map(notif => <SideNotification key={notif.notificationId} {...notif} />)(props)}
    </div>
  );
};

export default Notifications;
