import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    disabled: true,
    type: 'course',
    title: 'Other title',
    author: 'Author 2',
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    progress: 0.1,
    isSelected: true,
    badgeCategory: 'base',
    badgeLabel: 'basic'
  })
};
