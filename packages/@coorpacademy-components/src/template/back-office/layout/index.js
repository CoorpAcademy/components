import React from 'react';
import PropTypes from 'prop-types';
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
