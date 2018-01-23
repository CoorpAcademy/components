// @flow
import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import type {AvailableContent, MoveAction, SlidePool} from '../types';
import type {ChapterRulePool} from '../rule-engine/types';
import selectRule from '../rule-engine/select-rule';
import selectInitialSlide from './select-initial-slide';

const learnerInitialAction = (slidePools: Array<SlidePool>): MoveAction => {
  const slide = selectInitialSlide(slidePools);

  if (!slide) {
    throw new Error(
      'No initial slide found within this SlidePools: could not create an initial Action'
    );
  }

  return {
    type: 'move',
    payload: {
      nextContent: {
        type: 'slide',
        ref: slide._id
      }
    }
  };
};

const adaptiveInitialAction = (chapterRulePool: ChapterRulePool): MoveAction => {
  const rule = pipe(head, get('rules'), rules => selectRule(rules, null))(chapterRulePool);

  if (!rule) {
    throw new Error(
      'No rule could be selected within this ChapterRulePool: could not create an adaptive initial Action'
    );
  }

  const {instructions, destination} = rule;
  return {
    type: 'move',
    payload: {
      instructions,
      nextContent: destination
    }
  };
};

const createInitialAction = (availableContent: AvailableContent): MoveAction => {
  if (!availableContent) {
    throw new Error('param AvailableContent is mandatory to create an initial Action');
  }

  const {chapterRulePool, slidePools} = availableContent;

  if (chapterRulePool) {
    return adaptiveInitialAction(chapterRulePool);
  }

  if (!slidePools) {
    throw new Error('provide either a ChapterRulePool or a SlidePools to create an initial Action');
  }

  return learnerInitialAction(slidePools);
};

export default createInitialAction;
