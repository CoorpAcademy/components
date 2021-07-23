import {defaultsDeep} from 'lodash/fp';
import BattleRequestList from '../../../../../molecule/dashboard/battle-request-list/test/fixtures/default';
import CardsList from '../../../../../molecule/dashboard/cards-list/test/fixtures/default';
import ManyCardsList from '../../../../../molecule/dashboard/cards-list/test/fixtures/many';
import NewsList from '../../../../../molecule/dashboard/news-list/test/fixtures/default';
import StartBattle from '../../../../../molecule/dashboard/start-battle/test/fixtures/default';

const requestsProps = BattleRequestList.props;
const cardsProps = CardsList.props;
const manyCardsProps = ManyCardsList.props;
const newsProps = NewsList.props;
const battleProps = StartBattle.props;

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
      defaultsDeep(requestsProps, {
        type: 'battleRequests',
        key: 'battleRequests'
      }),
      defaultsDeep(cardsProps, {
        type: 'cards',
        key: 'playlist1'
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
      })
    ]
  }
};
