import isNil from 'lodash/fp/isNil';
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../../../atom/link';
import Life from '../../../../../atom/life';
import Learner from './learner';
import Microlearning from './microlearning';
import style from './style.css'; // eslint-disable-line css-modules/no-unused-class

const SlidesHeaders = {
  learner: Learner,
  microlearning: Microlearning
};

const Lives = ({lives}, context) => {
  if (isNil(lives)) {
    return null;
  }

  return (
    <div className={style.livesWrapper}>
      <Life {...lives} className={style.life} mode="small" />
    </div>
  );
};

Lives.propTypes = {
  lives: PropTypes.shape({
    count: PropTypes.number.isRequired
  })
};

const SlidesHeader = (props, context) => {
  const {type} = props;
  const Header = SlidesHeaders[type];

  return (
    <div data-name="slidesHeader" className={style.wrapper}>
      <Header {...props} />
      <Lives {...props} />
    </div>
  );
};

SlidesHeader.propTypes = {
  type: PropTypes.oneOf(['learner', 'microlearning']),
  content: PropTypes.shape({
    href: Link.propTypes.href,
    title: PropTypes.string.isRequired,
    details: PropTypes.string
  }),
  subcontent: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string
  }),
  lives: Lives.propTypes.lives
};

export default SlidesHeader;
