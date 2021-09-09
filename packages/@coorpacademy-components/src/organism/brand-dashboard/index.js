import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Dashboard = props => {
  const {text} = props;
  return (
    <div className={style.home} data-name="home-page">
      <h1 className={style.homeText}>{text}</h1>
    </div>
  );
};

Dashboard.propTypes = {
  text: PropTypes.string
};

export default Dashboard;
