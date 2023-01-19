import {set, pipe} from 'lodash/fp';
import JwplayerFixture from '../../../../../molecule/video-player/test/fixtures/jwplayer';
import RestackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/restack';
import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';

import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    reviewBackgroundAriaLabel: 'image background',
    stack: pipe(
      set('slides.2.answerUI.media', {
        type: 'video',
        loading: true,
        mimeType: 'application/jwplayer'
      }),
      set('slides.3.answerUI.media', {
        ...JwplayerFixture.props,
        type: 'video'
      })
    )(RestackedSlides.props)
  }
};

export default fixture;
