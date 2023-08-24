import Qcm from '../../../questions/qcm/test/fixtures/short-answers';

import {AnswerProps} from '../../prop-types';

type Fixture = {
  props: AnswerProps;
};

const answerProps = Qcm.props;

const fixture: Fixture = {
  props: {
    model: {
      ...answerProps,
      type: 'qcm'
    },
    media: {
      type: 'img',
      url: 'https://static.coorpacademy.com/content/CoorpAcademy/content-chanel/cockpit-ilearnchanel/default/19-1477921258654.jpg'
    },
    help: '',
    question: 'This is the question'
  }
};

export default fixture;
