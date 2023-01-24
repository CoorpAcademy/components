import {set, cloneDeep, pipe} from 'lodash/fp';
import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import DefaultStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/initial-state';
import SlideWithVideo from '../../../../../molecule/answer/test/fixtures/qcm-short-video';
import {ReviewPlayerProps} from '../../prop-types';

const slide = pipe(
  set('media.loading', true),
  set('media.mimeType', 'application/jwplayer')
)(cloneDeep(SlideWithVideo.props));

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: headerProps.props,
    stack: set('slides.0.answerUI', slide, DefaultStackedSlides.props)
  }
};

export default fixture;
