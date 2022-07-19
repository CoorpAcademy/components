import React from 'react';
import PropTypes from 'prop-types';
import BattleRequest from '../../battle-request';
import style from './style.css';

const BattleRequestList = React.memo(function BattleRequestList(props) {
  const {requests} = props;

  const cards = requests.map((request, key) => {
    return (
      <div className={style.card} key={key}>
        <BattleRequest {...request} />
      </div>
    );
  });

  return (
    <div className={style.list} data-name="battle-request-list">
      {cards}
    </div>
  );
});

BattleRequestList.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape(BattleRequest.propTypes))
};

export default BattleRequestList;
