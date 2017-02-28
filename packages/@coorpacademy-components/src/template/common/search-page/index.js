import React, {PropTypes} from 'react';
import Filters from '../../../molecule/filters';
import CardsGrid from '../../../organism/cards-grid';
import layout from '../layout.css';
import style from './style.css';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      searchFilters,
      cards
    } = this.props;

    return (
      <div>
        <Filters {...searchFilters} />
        <div className={style.cardsWrapper}>
          <CardsGrid {...cards} />
        </div>  
      </div>
    );
  }
};  

SearchPage.propTypes = {
  searchFilters: PropTypes.object,
  cards: PropTypes.object
};

export default SearchPage;