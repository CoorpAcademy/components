import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../../../atom/link';
import Learner from './learner';
import Microlearning from './microlearning';
import Lives from './lives';
import style from './style.css'; // eslint-disable-line css-modules/no-unused-class

const HEADER_TYPE = {
  LEARNER: 'learner',
  MICROLEARNING: 'microlearning'
};

const SlidesHeader = (props = {}, context) => {
  const {type, content, subcontent, lives = {}} = props;

  return (
    <div data-name="slidesHeader" className={style.wrapper}>
      {type === HEADER_TYPE.LEARNER && <Learner content={content} subcontent={subcontent} />}
      {type === HEADER_TYPE.MICROLEARNING && <Microlearning content={content} />}
      <Lives count={lives.count || 0} />
    </div>
  );
};

SlidesHeader.propTypes = {
  type: PropTypes.oneOf([HEADER_TYPE.LEARNER, HEADER_TYPE.MICROLEARNING]),
  content: PropTypes.shape({
    href: Link.propTypes.href,
    title: PropTypes.string.isRequired,
    details: PropTypes.string
  }),
  subcontent: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string
  }),
  lives: Lives.propTypes
};

export default SlidesHeader;
