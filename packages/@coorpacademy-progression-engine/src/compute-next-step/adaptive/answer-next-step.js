// @flow
import type {ChapterRule, Progression, NextStepParams, NextStepPayload} from '../../types';
import selectRule from './select-rule';

export default function nextStepForAnswer(
  progression: Progression,
  params: NextStepParams
): NextStepPayload {
  const {state} = progression;
  const {chapterRules, answer} = params;

  if (!chapterRules) {
    throw new Error('params.chapterRules is required for adaptive.nextStepForAnswer');
  }

  if (!answer) {
    throw new Error('params.answer is required for adaptive.nextStepForAnswer');
  }

  const rule: ChapterRule = selectRule(chapterRules, answer, state.allAnswers);
  return {
    nextContent: rule.destination,
    instructions: rule.instructions
  };
}
