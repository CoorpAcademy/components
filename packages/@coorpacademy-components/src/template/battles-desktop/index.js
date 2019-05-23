import React from 'react';
import PropTypes from 'prop-types';
import Battle from '../battle';
import style from './style.css';

const Battles = props => {
  const battles = props.battles;
  return (
    <ul className={style.cards}>
      {battles.map(battle => (
        <li key={battle.name} className={style.cardsItem}>
          <div className={style.card}>
            <Battle {...battle} />
          </div>
        </li>
      ))}
    </ul>
  );
};

Battles.propTypes = {
  battles: PropTypes.arrayOf(PropTypes.shape(Battle.PropTypes))
};

export default Battles;
