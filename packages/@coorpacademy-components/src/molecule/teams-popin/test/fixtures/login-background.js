import {defaultsDeep} from 'lodash/fp';
import Login from './login';

export default {
  props: defaultsDeep(Login.props, {
    backgroundImageUrl: 'https://static-staging.coorpacademy.com/content/teams/BG_teams@2x.jpg'
  })
};
