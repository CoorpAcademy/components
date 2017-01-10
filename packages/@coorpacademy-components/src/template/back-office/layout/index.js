import React, {PropTypes} from 'react';
import Header from '../../../organism/setup-header';
import style from './style.css';

const createLayout = Template => {
  return function Layout(props) {
    return (
      <div className={style.container}>
        <Header {...props.header} />
        <div className={style.contentWrapper}>
          <Template {...props} />
        </div>
      </div>
    );
  };
};

export default createLayout;
