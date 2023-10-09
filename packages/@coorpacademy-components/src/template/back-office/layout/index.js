import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../organism/setup-header';
import Provider from '../../../atom/provider';
import style from './style.css';

const createLayout = Template => {
  const Layout = props => {
    const {header} = props;
    return (
      <div>
        <div className={style.header}>
          <Header {...header} />
        </div>
        <div className={style.contentWrapper}>
          <Template {...props} />
        </div>
      </div>
    );
  };

  Layout.propTypes = {
    header: PropTypes.shape(Header.propTypes)
  };

  Layout.contextTypes = {
    skin: Provider.childContextTypes.skin,
    translate: Provider.childContextTypes.translate
  };

  return Layout;
};

export default createLayout;
