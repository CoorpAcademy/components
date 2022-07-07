import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    disabled: true,
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-marmiton/cockpit-marmiton/cover/shutterstock_520965634-1491986518210.jpg&h=500&w=500&q=90',
    progress: 0.1,
    isSelected: false,
    badgeCategory: 'coach',
    badgeLabel: 'Coach'
  })
};
