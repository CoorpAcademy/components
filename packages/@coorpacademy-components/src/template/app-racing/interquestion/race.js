import React from 'react';
import map from 'lodash/fp/map';
import PropTypes from 'prop-types';
import Car from './car';
import style from './race.css';

const mapNoCap = map.convert({cap: false});

const Race = props => {
  const {length, teamsPoints} = props;

  return (
    <div className={style.race}>
      <div className={style.arrival}>Arrival</div>
      <div className={style.cars}>
        {mapNoCap((points, teamIndex) => (
          <Car
            className={style.car}
            key={`runner-${teamIndex}`}
            teamIndex={teamIndex}
            pos={points / length}
          />
        ), teamsPoints)}
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
