import {defaultsDeep} from 'lodash/fp';
import standardCard from '../../../../../molecule/card/test/fixtures/default';
import certificationCard from '../../../../../molecule/certification-card/test/fixtures/default';
import skillCard from '../../../../../molecule/learner-skill-card/test/fixtures/default';
import playlistCard from '../../../../../molecule/playlist-card/test/fixtures/default';
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
  },
  {
    ...skillCard.props,
    skillTitle: 'People and Team Management',
    metrics: {content: 34, score: 90, questionsToReview: 5}
  }
];

const playlistsCards = [
  {
    ...playlistCard.props,
    title: 'Mastering the Art of Learning',
    courseCount: 78,
    progress: 65,
    imgUrl:
      'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    ...playlistCard.props,
    title: 'Pathway to Success: Learn and Grow',
    courseCount: 45,
    progress: 30,
    imgUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    ...playlistCard.props,
    title: 'Unlocking Knowledge: A Journey',
    courseCount: 32,
    progress: 85,
    imgUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    ...playlistCard.props,
    title: 'Unlocking Knowledge: A Journey',
    courseCount: 32,
    progress: 85,
    imgUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
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
        count: 5,
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
        count: 7,
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
        count: 4,
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
        count: 21,
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
