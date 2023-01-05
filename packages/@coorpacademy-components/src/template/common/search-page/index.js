import React from 'react';
import PropTypes from 'prop-types';
import {getOr, isEmpty} from 'lodash/fp';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import Filters from '../../../molecule/filters';
import CardsGrid from '../../../organism/cards-grid';
import CardsList from '../../../molecule/dashboard/cards-list';
import style from './style.css';

const SearchPage = (props, context) => {
  const {
    title,
    searchFilters,
    cards,
    noresultsfound,
    clearFilters,
    recommendations,
    moreSortAriaLabel,
    moreFilterAriaLabel
  } = props;

  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);

  const recommendationsView = isEmpty(recommendations) ? null : <CardsList {...recommendations} />;

  const cardsView = isEmpty(cards.list) ? (
    <div>
      <div className={style.noresults}>
        <div className={style.noresultstxt}>{noresultsfound}</div>
        <Button
          {...clearFilters}
          data-name="searchPageClear"
          className={style.clear}
          style={{background: defaultColor}}
          type="link"
        />
      </div>
      {recommendationsView}
    </div>
  ) : (
    <CardsGrid {...cards} />
  );

  return (
    <div>
      <Filters
        {...searchFilters}
        moreSortAriaLabel={moreSortAriaLabel}
        moreFilterAriaLabel={moreFilterAriaLabel}
      />
      <div data-name="searchResult" className={style.cardsWrapper}>
        <div className={style.title} role="status">
          {title}
        </div>
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
  clearFilters: PropTypes.shape(Button.propTypes),
  recommendations: PropTypes.shape(CardsList.propTypes),
  moreSortAriaLabel: PropTypes.string,
  moreFilterAriaLabel: PropTypes.string
};

export default SearchPage;
