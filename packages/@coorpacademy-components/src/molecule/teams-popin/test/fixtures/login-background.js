import {defaultsDeep} from 'lodash/fp';
import Login from './login';

export default {
  props: defaultsDeep(Login.props, {
    backgroundImageUrl:
      'https://trello-attachments.s3.amazonaws.com/5abb7e3739f3bf9088349c32/5fcf920916f044133e4e50ef/39f3e12ac0b2356518d2c4c3269bf67f/BG_teams%402x.jpg'
  })
};
