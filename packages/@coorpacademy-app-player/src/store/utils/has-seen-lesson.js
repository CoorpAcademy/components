import any from 'lodash/fp/any';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import {
  getCurrentProgression,
  getProgressionContent,
  getCurrentSlide,
  getPreviousSlide
} from './state-extract';

const hasSeenLesson = state => {
  const progression = getCurrentProgression(state);
  const progressionContent = getProgressionContent(state);
  const slide = getCurrentSlide(state) || getPreviousSlide(state);
  const lessons = get('lessons', slide);
  const viewedResources = getOr([], ['state', 'viewedResources'], progression);
  const viewedResourcesForContent = pipe(find(progressionContent), getOr([], 'resources'))(
    viewedResources
  );

  return (
    isEmpty(lessons) || any(ref => includes(ref, map('ref', lessons)), viewedResourcesForContent)
  );
};

export default hasSeenLesson;
