import {defaultsDeep} from 'lodash/fp';
import standardCard from '../../../../../molecule/card/test/fixtures/default';
import filters from '../../../../../molecule/filters/test/fixtures/default';
import CardsList from '../../../../../molecule/dashboard/cards-list/test/fixtures/default';

const recommendations = CardsList.props;
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
    title: 'Catalogue : 0 résultat',
    searchFilters: defaultsDeep(filters.props, {
      openFilters: true
    }),
    cards: {
      list: []
    },
    newVersion: true,
    moreSortAriaLabel: 'show or hide sortBy options',
    moreFilterAriaLabel: 'show or hide sortBy options',
    filterGroupAriaLabel: 'Apply filtering options to refine search results',
    sortAriaLabel: 'show more sort options',
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
    },
    noresultsfound: 'Sorry no result available',
    recommendations
  }
};
