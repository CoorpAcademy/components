import FreeText from '../../../questions/free-text/test/fixtures/default';
import {AnswerProps} from '../../prop-types';

type Fixture = {
  props: AnswerProps;
};

const fixture: Fixture = {
  props: {
    model: {
      ...FreeText.props,
      type: 'freeText'
    },
    media: {
      type: 'img',
      url: 'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-minds-and-more/cockpit-minds-and-more/default/shutterstock_701165035-1518620484928.jpg&h=400&w=835&q=80&m=contain'
    },
    help: '',
    question: 'This is the question'
  }
};

export default fixture;
