import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import {getResourcesToPlay, getContent, getCurrentSlide} from '../../utils/state-extract';
import {selectResource} from '../../actions/ui/corrections';
import {play, pause, ended} from '../../actions/ui/video';

const getPayload = (state, resource) => ({
  resource: {
    ref: resource._id,
    type: resource.type,
    version: '1'
  },
  slide: getCurrentSlide(state),
  chapter: getContent(state)
});

const getResourcesProps = (options, store) => (state, slide) => {
  const {dispatch} = store;
  const resourcesToPlay = getResourcesToPlay(state);

  const lessons = pipe(
    getOr([], 'lessons'),
    map(lesson => {
      const payload = getPayload(state, lesson);
      return pipe(
        set('onClick', () => dispatch(selectResource(lesson._id))),
        set('onPlay', () => dispatch(play(payload))),
        set('onPause', () => dispatch(pause(payload))),
        set('onEnded', () => dispatch(ended(payload))),
        set('selected', lesson._id === resourcesToPlay),
        _lesson => {
          if (_lesson.type === 'pdf') {
            return set('mediaUrl', _lesson.mediaUrl, _lesson);
          }
          return _lesson;
        }
      )(lesson);
    })
  )(slide);

  const forceSelected = !resourcesToPlay && !isEmpty(lessons);
  return !isEmpty(lessons)
    ? update('0.selected', selected => forceSelected || selected)(lessons)
    : lessons;
};

export default getResourcesProps;
