import React, {PropTypes} from 'react';
import TabNavigation from '../../molecule/tab-navigation';
import style from './style.css';

const Settings = props => {
  return (
    <div className={style.settings}>
      <TabNavigation {...props} />
    </div>
  );
};

export default Settings;
