import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const AnalyticsSidebar = props => {
  return (
    <div className={style.text}>
      {props.text}
    </div>
  );
};
AnalyticsSidebar.propTypes = {
  text: PropTypes.string.isRequired
};

export default AnalyticsSidebar;
