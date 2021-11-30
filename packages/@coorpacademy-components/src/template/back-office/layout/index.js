import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../organism/setup-header';
import style from './style.css';

const createLayout = Template => {
  const Layout = props => {
    const {header} = props;
    return (
      <div className={style.header} >
        <Header {...header}/>
        <div className={style.contentWrapper} >
          <Template {...props} />
        </div>
      </div>
    );
  };

  Layout.propTypes = {
    header: PropTypes.shape(Header.propTypes)
  };

  return Layout;
};

export default createLayout;
