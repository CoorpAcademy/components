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

const SlidesHeader = (props = {}, context = undefined) => {
  const {type, content, subcontent, lives, mode} = props;

  return (
    <div data-name="slidesHeader" className={style.wrapper}>
      {type === HEADER_TYPE.LEARNER ? (
        <Learner content={content} subcontent={subcontent} mode={mode} />
      ) : null}
      {type === HEADER_TYPE.MICROLEARNING ? <Microlearning content={content} /> : null}
      {lives ? <Lives count={lives.count} /> : null}
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
  lives: PropTypes.shape(Lives.propTypes),
  mode: PropTypes.string
};

export default SlidesHeader;
