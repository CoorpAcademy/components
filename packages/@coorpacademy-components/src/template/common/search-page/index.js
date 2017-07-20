import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import Filters from '../../../molecule/filters';
import CardsGrid from '../../../organism/cards-grid';
import style from './style.css';

const SearchPage = (props, context) => {
  const {title, searchFilters, cards, noresultsfound, clearFilters} = props;

  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);

  const cardsView = isEmpty(cards.list)
    ? <div className={style.noresults}>
        <div>{noresultsfound}</div>
        <Button
          className={style.clear}
          style={{background: defaultColor}}
          {...clearFilters}
          type="link"
        />
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
  skin: Provider.childContextTypes.skin
};

SearchPage.propTypes = {
  noresultsfound: PropTypes.string,
  title: PropTypes.string,
  searchFilters: PropTypes.shape(Filters.propTypes),
  cards: PropTypes.shape(CardsGrid.propTypes),
  clearFilters: PropTypes.shape(Button.propTypes)
};

export default SearchPage;
