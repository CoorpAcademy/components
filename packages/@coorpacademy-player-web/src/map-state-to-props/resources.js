import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import some from 'lodash/fp/some';
import omit from 'lodash/fp/omit';
import {getResourceToPlay} from '@coorpacademy/player-store/es/utils/state-extract';
import {selectResource} from '@coorpacademy/player-store/es/actions/ui/corrections';
import {play, pause, resume, ended} from '@coorpacademy/player-store/es/actions/ui/video';

const getResourcesProps = (options, store) => (state, slide) => {
  const {dispatch} = store;
  const resourceToPlay = getResourceToPlay(state);

  const lessons = pipe(
    getOr([], 'lessons'),
    map(lesson => ({
      ...omit(['id', 'ref'], lesson),
      onClick: () => dispatch(selectResource(lesson._id)),
      onPlay: () => dispatch(play(lesson)),
      onResume: () => dispatch(resume(lesson)),
      onPause: () => dispatch(pause(lesson)),
      onEnded: () => dispatch(ended(lesson)),
      selected: lesson._id === resourceToPlay
    }))
  )(slide);

  if (isEmpty(lessons) || some({selected: true}, lessons)) {
    return lessons;
  }

  // If there are lessons but none are selected, force select the first one
  return set([0, 'selected'], true, lessons);
};

export default getResourcesProps;
