import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    type: 'scorm',
    customer: {
      coorpOriginal: false,
      name: 'Decathlon creation'
    },
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-marmiton/cockpit-marmiton/cover/shutterstock_520965634-1491986518210.jpg&h=260&w=260&q=90'
  })
};
