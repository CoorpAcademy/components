import {defaultsDeep} from 'lodash/fp';
import skillCard from '../../../../../molecule/learner-skill-card/test/fixtures/default';
import filters from '../../../../../molecule/filters/test/fixtures/default';
import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';

const skillsCards = [
  {
    ...skillCard.props,
    skillTitle: 'Lifelong Learning',
    metrics: {content: 89, score: 65, questionsToReview: 25}
  },
  {
    ...skillCard.props,
    skillTitle: 'Agility',
    metrics: {content: 42, score: 80, questionsToReview: 12}
  },
  {
    ...skillCard.props,
    skillTitle: 'Data-drivenness and AI',
    metrics: {content: 89, score: 45, questionsToReview: 25}
  },
  {
    ...skillCard.props,
    skillTitle: 'People and Team Management',
    metrics: {content: 34, score: 90, questionsToReview: 5}
  }
];

export default {
  props: {
    title: 'Explorer (567 items)',
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
      skills: {
        title: 'Skills',
        cards: skillsCards,
        showMore: 'See all',
        onShowMore: () => console.log('Show more skills'),
        order: 2,
        display: true,
        'arrows-aria-label': {
          showMoreOnLeftAriaLabel: 'Previous skills',
          showMoreOnRightAriaLabel: 'Next skills'
        }
      }
    }
  }
};
