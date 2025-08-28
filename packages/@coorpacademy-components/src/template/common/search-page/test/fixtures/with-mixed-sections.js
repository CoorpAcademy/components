import {defaultsDeep} from 'lodash/fp';
import standardCard from '../../../../../molecule/card/test/fixtures/default';
import certificationCard from '../../../../../molecule/certification-card/test/fixtures/default';
import filters from '../../../../../molecule/filters/test/fixtures/default';
import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';

const newContentCards = [
  {...standardCard.props, badge: 'new', title: 'Digital Innovations'},
  {...standardCard.props, badge: 'new', title: 'Future of Learning', author: 'Coorpacademy'},
  {...standardCard.props, badge: 'new', title: 'Digital Innovations'},
  {...standardCard.props, badge: 'new', title: 'Future of Learning', author: 'Coorpacademy'},
  {...standardCard.props, badge: 'new', title: 'Future of Learning', author: 'Coorpacademy'}
];

const certificationsCards = [
  {
    ...certificationCard.props,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg',
    goal: {title: 'Digital Leadership Certification', condition: {nbDone: 1}}
  },
  {
    ...certificationCard.props,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg',
    goal: {title: 'AI Technology Assessment', condition: {nbDone: 1}},
    progress: 67
  },
  {
    ...certificationCard.props,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg',
    goal: {title: 'Digital Leadership Certification', condition: {nbDone: 1}}
  },
  {
    ...certificationCard.props,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg',
    goal: {title: 'AI Technology Assessment', condition: {nbDone: 1}},
    progress: 67
  },
  {
    ...certificationCard.props,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg',
    goal: {title: 'Digital Leadership Certification', condition: {nbDone: 1}}
  },
  {
    ...certificationCard.props,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg',
    goal: {title: 'AI Technology Assessment', condition: {nbDone: 1}},
    progress: 67
  }
];

export default {
  props: {
    title: 'Explorer (1250 items)',
    searchFilters: defaultsDeep(filters.props, {
      openFilters: true
    }),
    cards: cardsGrid.props,
    moreSortAriaLabel: 'show or hide sortBy options',
    moreFilterAriaLabel: 'show or hide sortBy options',
    filterGroupAriaLabel: 'Apply filtering options to refine search results',
    sortAriaLabel: 'show more sort options',
    sections: {
      freshContent: {
        title: 'New & Fresh Content',
        cards: newContentCards,
        showMore: 'See all',
        onShowMore: () => console.log('Show more new content'),
        order: 0,
        display: true,
        'arrows-aria-label': {
          showMoreOnLeftAriaLabel: 'Previous new content',
          showMoreOnRightAriaLabel: 'Next new content'
        }
      },
      certifications: {
        title: 'Certifications',
        cards: certificationsCards,
        showMore: 'See all',
        onShowMore: () => console.log('Show more certifications'),
        order: 1,
        display: true,
        'arrows-aria-label': {
          showMoreOnLeftAriaLabel: 'Previous certifications',
          showMoreOnRightAriaLabel: 'Next certifications'
        }
      }
    }
  }
};
