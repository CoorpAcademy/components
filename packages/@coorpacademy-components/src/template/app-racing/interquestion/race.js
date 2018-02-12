import React from 'react';
import map from 'lodash/fp/map';
import PropTypes from 'prop-types';
import style from './race.css';

const COLORS = [
  '#F5C742',
  '#4D4AE8',
  '#45FF7A',
  '#FF4545',
  '#A742F5',
  '#FF7238'
];

const mapNoCap = map.convert({cap: false});

const Race = props => {
  const {length, teamsPoints} = props;

  return (
    <div className={style.race}>
      <div className={style.arrival}>Arrival</div>
      <div className={style.runners}>
        {mapNoCap((points, teamIndex) => <div className={style.runner} key={`runner-${teamIndex}`} style={{backgroundColor: COLORS[teamIndex]}}/>, teamsPoints)}
      </div>
      <div className={style.start}>Start</div>
    </div>
  )
};

Race.propTypes = {
  length: PropTypes.number.isRequired,
  teamsPoints: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Race;
