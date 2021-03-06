import {getOr, isEmpty, map, pipe, set, some, omit} from 'lodash/fp';

import {
  ended,
  getResourceToPlay,
  pause,
  play,
  resume,
  selectResource
} from '@coorpacademy/player-store';

const getResourcesProps = (options, store) => (state, slide) => {
  const {dispatch} = store;
  const resourceToPlay = getResourceToPlay(state);

  const lessons = pipe(
    getOr([], 'lessons'),
    map(lesson => ({
      ...omit(['id', 'ref'], lesson),
      onClick: () => dispatch(selectResource(lesson._id)),
      onPlay: () => dispatch(play()),
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
