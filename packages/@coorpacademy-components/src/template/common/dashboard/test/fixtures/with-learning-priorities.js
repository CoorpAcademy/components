import {defaultsDeep} from 'lodash/fp';
import BattleRequestList from '../../../../../molecule/dashboard/battle-request-list/test/fixtures/default';
import CardsList from '../../../../../molecule/dashboard/cards-list/test/fixtures/default';
import ManyCardsList from '../../../../../molecule/dashboard/cards-list/test/fixtures/many';
import NewsList from '../../../../../molecule/dashboard/news-list/test/fixtures/default';
import StartBattle from '../../../../../molecule/dashboard/start-battle/test/fixtures/default';
import ReviewBanner from '../../../../../molecule/dashboard/review-banner/test/fixtures/default';
import LearningProfileBanner from '../../../../../molecule/dashboard/learning-profile-banner/test/fixtures/default';
import LearningPrioritiesSection from '../../../../../molecule/dashboard/cards-list/test/fixtures/learning-priority-card-list';

const requestsProps = BattleRequestList.props;
const cardsProps = CardsList.props;
const manyCardsProps = ManyCardsList.props;
const newsProps = NewsList.props;
const battleProps = StartBattle.props;
const reviewProps = ReviewBanner.props;
const learningProfileProps = LearningProfileBanner.props;

export default {
  props: {
    welcome: {
      title: 'Welcome Faust !',
      subtitle: 'Exxplore',
      cover:
        'https://static.coorpacademy.com/content/onboarding/raw/image-dios-1-1531517080118.jpg',
      light: true,
      alignment: 'left'
    },
    sections: [
      {
        ...LearningPrioritiesSection.props,
        type: 'learningPrioritiesCards',
        key: 'learningPriorities'
      },
      defaultsDeep(requestsProps, {
        type: 'battleRequests',
        key: 'battleRequests'
      }),
      defaultsDeep(cardsProps, {
        type: 'cards',
        key: 'playlist1'
      }),
      defaultsDeep(learningProfileProps, {
        type: 'learningProfile',
        key: 'learningProfile'
      }),
      defaultsDeep(manyCardsProps, {
        type: 'cards',
        key: 'playlist2'
      }),
      defaultsDeep(battleProps, {
        type: 'battle',
        key: 'battle'
      }),
      defaultsDeep(newsProps, {
        type: 'news',
        key: 'news'
      }),
      defaultsDeep(reviewProps, {
        type: 'review',
        key: 'review'
      })
    ]
  }
};
