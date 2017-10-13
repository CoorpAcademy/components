import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../../atom/link';
import Life from '../../../../atom/life';
import Learner from './learner';
import Microlearning from './microlearning';
import style from './style.css'; // eslint-disable-line css-modules/no-unused-class

const PlayerHeaders = {
  learner: Learner,
  microlearning: Microlearning
};

const Lives = ({lives}, context) => {
  if (!lives) {
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

const PlayerHeader = (props, context) => {
  const {type} = props;
  const Header = PlayerHeaders[type];

  return (
    <div data-name="slidesHeader" className={style.wrapper}>
      <Header {...props} />
      <Lives {...props} />
    </div>
  );
};

PlayerHeader.propTypes = {
  type: PropTypes.oneOf(['learner', 'microlearning']),
  content: PropTypes.shape({
    href: Link.propTypes.href,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  }),
  subcontent: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }),
  lives: Lives.propTypes.lives
};

export default PlayerHeader;
