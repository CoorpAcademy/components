import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import BattleRequest from '../../battle-request';
import style from './style.css';

const BattleRequestList = (props, context) => {
  const skin = context;
  const {
    requests
  } = props;

  const cards = requests.map((request, key) => {
    return (
      <div className={style.card}
        key={key}
      >
        <BattleRequest
          {...request}
        />
      </div>
    );
  });

  return (
    <div className={style.list}>
      {cards}
    </div>
  );
};

BattleRequestList.contextTypes = {
  skin: React.PropTypes.object
};

BattleRequestList.propTypes = {
  requests: React.PropTypes.array
};

export default BattleRequestList;
