import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import MediaQuery from 'react-responsive';
import {mobileQuery} from '../../util/breakpoints';
import Card from '../../molecule/card';
import Loader from '../../atom/loader';
import style from './style.css';

function CardsGrid(props) {
  const {list = [], loading = false} = props;

  const loader = loading && (
    <div className={style.loader}>
      <Loader />
    </div>
  );

  const cards = map(
    card => (
      <div data-name="cardGrid" className={style.cardWrapper} key={card.key}>
        <MediaQuery query={mobileQuery}>
          {isMobile => {
            if (card.type === 'cover') {
              return <Card {...card} className={style.card} backgroundLayout="cover" />;
            } else if (isMobile) {
              return <Card {...card} className={style.card} backgroundLayout="left" />;
            } else {
              return <Card {...card} className={style.card} backgroundLayout="top" />;
            }
          }}
        </MediaQuery>
      </div>
    ),
    list
  );

  return (
    <div className={style.default}>
      {cards}
      {loader}
    </div>
  );
}

CardsGrid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(Card.PropTypes)),
  loading: PropTypes.bool
};

export default CardsGrid;
