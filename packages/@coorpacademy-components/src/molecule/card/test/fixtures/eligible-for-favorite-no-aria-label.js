import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    disabled: false,
    type: 'chapter',
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-marmiton/cockpit-marmiton/cover/shutterstock_520965634-1491986518210.jpg&h=500&w=500&q=90',
    progress: 0.1,
    notification: {
      message: 'added to your list',
      icon: 'addFavorite'
    },
    favorite: false,
    'favorite-aria-label': undefined
  })
};
