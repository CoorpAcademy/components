import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const ReviewBanner = (props, context) => {
  const {title, subtitle, cta} = props;

  return (<div className={style.root} data-name="start-battle">
      <div className={style.container}>
        <div className={style.middle}>
          
        </div>
      </div>
    </div>);
};


ReviewBanner.propTypes = {
  startBattleText: PropTypes.string,
  becomeAChampionText: PropTypes.string,
  challengeText: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string
};

export default React.memo(ReviewBanner);
