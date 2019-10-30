import defaultsDeep from 'lodash/fp/defaultsDeep';
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
        type: 'battleRequests'
      }),
      defaultsDeep(cardsProps, {
        type: 'cards'
      }),
      defaultsDeep(manyCardsProps, {
        type: 'cards'
      }),
      defaultsDeep(battleProps, {
        type: 'battle'
      }),
      defaultsDeep(newsProps, {
        type: 'news'
      })
    ]
  }
};
