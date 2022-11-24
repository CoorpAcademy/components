import concat from 'lodash/fp/concat';
import slice from 'lodash/fp/slice';
import type {ProgressionFromAPI} from '@coorpacademy/review-services';

export const slideIndexes = ['0', '1', '2', '3', '4'] as const;

export type SlideIndexes = typeof slideIndexes[number];

export const getProgressionSlidesRefs = (progression: ProgressionFromAPI): string[] => {
  if (progression.state.step.current <= 5) {
    const slideRef = progression.state.nextContent.ref;
    return concat(progression.state.slides, [slideRef]);
  }
  return slice(0, 5, progression.state.slides);
};
