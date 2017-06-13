import React from 'react';
import PropTypes from 'prop-types';
import SlidesHeader from '../../../molecule/slides/slides-header';
import Loader from '../../../atom/loader';
import Summary from '../../../organism/app-player/summary';
import style from './style.css';

const Content = props => {
  if (props.header) {
    return (
      <div className={style.popinWrapper}>
        <Summary {...props} />
      </div>
    );
  } else {
    return <Loader />;
  }
};

const PopinEnd = props => {
  const {header, summary} = props;

  return (
    <div className={style.wrapper}>
      <SlidesHeader {...header} />
      <Content {...summary} />
    </div>
  );
};

PopinEnd.propTypes = {
  header: PropTypes.shape(SlidesHeader.propTypes),
  summary: PropTypes.shape(Summary.propTypes)
};

export default PopinEnd;
