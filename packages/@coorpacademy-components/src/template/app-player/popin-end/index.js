import React from 'react';
import PropTypes from 'prop-types';
import Header from '../player/player-header';
import Summary from './summary';
import style from './style.css';

const Content = props =>
  <div className={style.popinWrapper}>
    <Summary {...props} />
  </div>;

const PopinEnd = props => {
  const {header, summary} = props;
  return (
    <div data-name="popinEnd" className={style.wrapper}>
      <div className={style.slidesHeader}>
        <Header {...header} />
      </div>
      <Content {...summary} />
    </div>
  );
};

PopinEnd.propTypes = {
  header: PropTypes.shape(Header.propTypes),
  summary: PropTypes.shape(Summary.propTypes)
};

export default PopinEnd;
