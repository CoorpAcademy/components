import React from 'react';
import Header from '../../../organism/setup-header';
import style from './style.css';

const createLayout = (Template, contextTypes = {}) => {
  Template.contextTypes = contextTypes;
  return function Layout(props) {
    return (
      <div>
        <Header {...props.header} />
        <div className={style.contentWrapper}>
          <Template {...props} />
        </div>
      </div>
    );
  };
};

export default createLayout;
