import React from 'react';
import PropTypes from 'prop-types';
import SlidesHeader from '../../../molecule/slides/slides-header';
import Loader from '../../../atom/loader';
import Summary from '../../../organism/app-player/summary';
import style from './style.css';

const PopinEnd = props => {
  const {header, summary} = props;

  const content = summary.header
    ? <div className={style.popinWrapper}>
        <Summary {...summary} />
      </div>
    : <Loader />;

  return (
    <div className={style.wrapper}>
      <SlidesHeader {...header} />
      {content}
    </div>
  );
};

PopinEnd.propTypes = {
  header: PropTypes.shape(SlidesHeader.propTypes),
  summary: PropTypes.shape(Summary.propTypes)
};

export default PopinEnd;
