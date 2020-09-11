import {defaultsDeep} from 'lodash/fp';
import Default from './podcast-no-background';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    backgroundImageUrl:
      'https://api-staging.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/page_discipline/1_recherche_en_ligne.jpg&amp;h=400&amp;w=400&amp;q=80&amp;m=contain'
  })
};
