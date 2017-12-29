// @flow
import type {ChapterRule, Answer, AllAnswers} from '../../common/types';

export default function selectRule(
  chapterRules: Array<ChapterRule>,
  answer: Answer,
  allAnswers: AllAnswers
): ChapterRule {
  return chapterRules[0];
}
