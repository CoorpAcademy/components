import React from 'react';
import PropTypes from 'prop-types';
import Header from '../player/slides/header';
import Summary from './summary';
import style from './style.css';

const Content = props => {
  const {mode} = props;
  return (
    <div className={!(mode === 'scorm') && style.popinWrapper}>
      <Summary {...props} />
    </div>
  );
};
Content.propTypes = {
  mode: PropTypes.string
};

const PopinEnd = props => {
  const {header, summary, mode} = props;
  return (
    <div data-name="popinEnd" className={style.wrapper}>
      <div className={style.slidesHeader}>
        <Header {...header} />
      </div>
      <Content {...summary} mode={mode} />
    </div>
  );
};

PopinEnd.propTypes = {
  header: PropTypes.shape(Header.propTypes),
  summary: PropTypes.shape(Summary.propTypes),
  mode: PropTypes.string
};

export default PopinEnd;
