import {noop} from 'lodash/fp';
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
      type: 'audio',
      mimeType: 'audio/acc',
      poster: 'https://picsum.photos/500/300',
      mediaUrl:
        '//static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/sample-1618502603227.aac',
      _id: '590b9be24f7b862e0046e577',
      subtitles: [],
      posters: [],
      src: [],
      onClick: noop,
      onPlay: () => console.log('play'),
      onPause: () => console.log('pause'),
      onResume: () => console.log('resume'),
      onEnded: () => console.log('end')
    },
    help: '',
    question: 'This is the question'
  }
};

export default fixture;
