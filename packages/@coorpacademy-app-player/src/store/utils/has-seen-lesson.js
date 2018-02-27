import any from 'lodash/fp/any';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import {getCurrentProgression, getCurrentSlide, getPreviousSlide} from './state-extract';

const hasSeenLesson = state => {
  const progression = getCurrentProgression(state);
  const slide = getCurrentSlide(state) || getPreviousSlide(state);
  const lessons = get('lessons', slide);
  const viewedResources = getOr([], ['state', 'viewedResources'], progression);
  const chapterContent = {
    type: 'chapter',
    ref: get('chapter_id', slide)
  };
  const viewedResourcesForContent = pipe(find(chapterContent), getOr([], 'resources'))(
    viewedResources
  );

  return (
    isEmpty(lessons) || any(ref => includes(ref, map('ref', lessons)), viewedResourcesForContent)
  );
};

export default hasSeenLesson;
