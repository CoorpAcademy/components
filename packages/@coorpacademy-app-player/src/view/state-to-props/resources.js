import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import {getResourcesToPlay} from '../../utils/state-extract';
import {selectResource} from '../../actions/ui/corrections';

const getResourcesProps = store => (state, slide) => {
  const {dispatch} = store;
  const resourcesToPlay = getResourcesToPlay(state);

  const lessons = pipe(
    getOr([], 'lessons'),
    map(lesson => {
      return pipe(
        set('onClick', () => dispatch(selectResource(lesson._id))),
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
