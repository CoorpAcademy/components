import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import headerFixtures from '../../landing-header/test/fixtures/default';
import playersListFixtures from '../../players-list/test/fixtures/default';
import footerFixtures from '../../landing-footer/test/fixtures/default';

export default {
  props: {
    team: headerFixtures.props.team,
    players: playersListFixtures.props.players,
    teams: map(set('ready', true), footerFixtures.props.teams),
  }
};
