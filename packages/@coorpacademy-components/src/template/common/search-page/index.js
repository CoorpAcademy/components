import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import Filters from '../../../molecule/filters';
import Button from '../../../atom/button';
import CardsGrid from '../../../organism/cards-grid';
import style from './style.css';

const SearchPage = (props, context) => {
  const {title, searchFilters, cards, noresultsfound, clearFilters} = props;

  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);

  const cardsView = isEmpty(cards.list)
    ? <div className={style.noresults}>
        <div>{noresultsfound}</div>
        <Button {...clearFilters} className={style.clear} style={{background: defaultColor}} />
      </div>
    : <CardsGrid {...cards} />;

  return (
    <div>
      <Filters {...searchFilters} />
      <div className={style.cardsWrapper}>
        <div className={style.title}>{title}</div>
        {cardsView}
      </div>
    </div>
  );
};

SearchPage.contextTypes = {
  skin: PropTypes.object
};

SearchPage.propTypes = {
  noresultsfound: PropTypes.string,
  title: PropTypes.string,
  searchFilters: PropTypes.object,
  cards: PropTypes.object,
  clearFilters: PropTypes.object
};

export default SearchPage;
