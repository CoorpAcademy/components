import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../../../molecule/filters';
import CardsGrid from '../../../organism/cards-grid';
import style from './style.css';

const SearchPage = (props, context) => {
  const {
    searchFilters,
    cards
  } = props;

  return (
    <div>
      <Filters {...searchFilters} />
      <div className={style.cardsWrapper}>
        <CardsGrid {...cards} />
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  searchFilters: PropTypes.object,
  cards: PropTypes.object
};

export default SearchPage;
