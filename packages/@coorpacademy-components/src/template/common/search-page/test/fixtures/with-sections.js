import {defaultsDeep} from 'lodash/fp';
import standardCard from '../../../../../molecule/card/test/fixtures/default';
import certificationCard from '../../../../../molecule/certification-card/test/fixtures/default';
import skillCard from '../../../../../molecule/learner-skill-card/test/fixtures/default';
import filters from '../../../../../molecule/filters/test/fixtures/default';
import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';

// Create different card types for each section
const newContentCards = [
  {...standardCard.props, badge: 'new', title: 'Digital Innovations'},
  {...standardCard.props, badge: 'new', title: 'Future of Learning', author: 'Coorpacademy'},
  {...standardCard.props, title: "Today's Technology", progress: 0.3},
  {...standardCard.props, title: 'Digital Landscape', progress: 0.7},
  {...standardCard.props, badge: 'new', title: 'Modern Skills'}
];

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

const playlistsCards = [
  {
    ...standardCard.props,
    title: 'Mastering the Art of Learning',
    type: 'playlist',
    author: 'Playlist'
  },
  {
    ...standardCard.props,
    title: 'Pathway to Success: Learn and Grow',
    type: 'playlist',
    author: 'Playlist'
  },
  {
    ...standardCard.props,
    title: 'Unlocking Knowledge: A Journey',
    type: 'playlist',
    author: 'Playlist'
  }
];

const certificationsCards = [
  {
    ...certificationCard.props,
    goal: {title: 'Digital Leadership Certification', condition: {nbDone: 1}},
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg'
  },
  {
    ...certificationCard.props,
    goal: {title: 'AI Technology Assessment', condition: {nbDone: 1}},
    progress: 67,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg'
  },
  {
    ...certificationCard.props,
    goal: {title: 'Modern Management Skills', condition: {nbDone: 1}},
    progress: 100,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg'
  },
  {
    ...certificationCard.props,
    goal: {title: 'Data Analysis Certification', condition: {nbDone: 1}},
    progress: 23,
    imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg'
  }
];

export default {
  props: {
    title: 'Explorer (3690 items)',
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
      },
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
      },
      playlists: {
        title: 'Playlists',
        cards: playlistsCards,
        showMore: 'See all',
        onShowMore: () => console.log('Show more playlists'),
        order: 3,
        display: true,
        'arrows-aria-label': {
          showMoreOnLeftAriaLabel: 'Previous playlists',
          showMoreOnRightAriaLabel: 'Next playlists'
        }
      }
    }
  }
};
