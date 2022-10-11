import {combineReducers} from 'redux';

import corrections, {CorrectionsState} from './corrections';
import lambdaReviewURL, {LambdaReviewURLState} from './lambda-review-url';
import progression, {ProgressionState} from './progression';
import skills, {SkillsState} from './skills';
import slides, {SlidesState} from './slides';
import token, {TokenState} from './token';
import rank, {RankState} from './rank';

export type DataState = {
  corrections: CorrectionsState;
  lambdaReviewURL: LambdaReviewURLState;
  progression: ProgressionState;
  skills: SkillsState;
  slides: SlidesState;
  token: TokenState;
  rank: RankState;
};

export default combineReducers({
  corrections,
  lambdaReviewURL,
  progression,
  skills,
  slides,
  token,
  rank
});
