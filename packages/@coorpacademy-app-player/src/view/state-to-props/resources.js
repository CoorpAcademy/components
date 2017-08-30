import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import {getResourcesToPlay} from '../../utils/state-extract';
import {selectResource} from '../../actions/ui/corrections';
import {play, pause, resume, ended} from '../../actions/ui/video';

const getResourcesProps = (options, store) => (state, slide) => {
  const {dispatch} = store;
  const resourcesToPlay = getResourcesToPlay(state);

  const lessons = pipe(
    getOr([], 'lessons'),
    map(lesson => {
      return pipe(
        set('onClick', () => dispatch(selectResource(lesson._id))),
        set('onPlay', () => dispatch(play(lesson))),
        set('onResume', () => dispatch(resume(lesson))),
        set('onPause', () => dispatch(pause(lesson))),
        set('onEnded', () => dispatch(ended(lesson))),
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
