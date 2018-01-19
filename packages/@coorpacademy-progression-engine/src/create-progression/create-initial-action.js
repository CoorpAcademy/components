// @flow
import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import type {AvailableContent, MoveAction, SlidePool} from '../types';
import type {ChapterRulePool} from '../rule-engine/types';
import selectInitialRule from './select-initial-rule';
import selectInitialSlide from './select-initial-slide';

const learnerInitialAction = (slidePools: Array<SlidePool>): MoveAction => {
  const slide = selectInitialSlide(slidePools);

  if (!slide) {
    throw new Error('');
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
  const rule = pipe(head, get('rules'), selectInitialRule)(chapterRulePool);

  if (!rule) {
    throw new Error('');
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
    throw new Error('');
  }

  const {chapterRulePool, slidePools} = availableContent;

  if (chapterRulePool) {
    return adaptiveInitialAction(chapterRulePool);
  }

  if (!slidePools) {
    throw new Error('');
  }

  return learnerInitialAction(slidePools);
};

export default createInitialAction;
