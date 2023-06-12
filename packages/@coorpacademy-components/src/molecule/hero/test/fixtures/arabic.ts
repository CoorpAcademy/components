import cardContent from '../../../card-content/test/fixtures/arabic-hero';
import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    ...cardContent.props,
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90'
  }
};
export default fixture;
