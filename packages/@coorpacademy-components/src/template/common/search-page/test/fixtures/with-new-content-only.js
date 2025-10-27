import {defaultsDeep} from 'lodash/fp';
import standardCard from '../../../../../molecule/card/test/fixtures/default';
import filters from '../../../../../molecule/filters/test/fixtures/default';
import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';

const newContentCards = [
  {...standardCard.props, badge: 'new', title: 'Mastering Digital Innovations'},
  {
    ...standardCard.props,
    badge: 'new',
    title: 'Exploring the Future of Learning',
    author: 'Coorpacademy'
  },
  {...standardCard.props, title: 'The Future of Learning: Today', progress: 0.3},
  {...standardCard.props, title: 'Navigating the Digital Landscape', progress: 0.7}
];

export default {
  props: {
    title: 'Explorer (890 items)',
    searchFilters: defaultsDeep(filters.props, {
      openFilters: true
    }),
    cards: cardsGrid.props,
    moreSortAriaLabel: 'show or hide sortBy options',
    moreFilterAriaLabel: 'show or hide sortBy options',
    filterGroupAriaLabel: 'Apply filtering options to refine search results',
    sortAriaLabel: 'show more sort options',
    newVersion: true,
    sections: {
      freshContent: {
        title: 'New & Fresh Content',
        cards: newContentCards,
        count: 100,
        showMore: 'See all',
        onShowMore: () => console.log('Show more new content'),
        order: 0,
        display: true,
        'arrows-aria-label': {
          showMoreOnLeftAriaLabel: 'Previous new content',
          showMoreOnRightAriaLabel: 'Next new content'
        }
      }
    }
  }
};
