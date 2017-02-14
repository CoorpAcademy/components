import React, {PropTypes} from 'react';
import set from 'lodash/fp/set';
import map from 'lodash/fp/map';
import Card from '../../molecule/card';
import style from './style.css';

function CardsGrid(props) {
  const {
    content = []
  } = props;

  const cards = map(cardProps => {
    return (
      <Card
        {...cardProps}
      />
    );
  }, content);

  return (
    <div className={style.default}>
      {cards}
    </div>
  );
}

CardsGrid.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object)
};

export default CardsGrid;
