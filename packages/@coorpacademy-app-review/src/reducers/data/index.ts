import {combineReducers} from 'redux';

import answersCorrection, {AnswersCorrectionState} from './answers-correction';
import progression, {ProgressionState} from './progression';
import skills, {SkillsState} from './skills';
import slides, {SlidesState} from './slides';
import token, {TokenState} from './token';

export type DataState = {
  answersCorrection: AnswersCorrectionState;
  isFetching?: boolean;
  progression: ProgressionState;
  skills: SkillsState;
  slides: SlidesState;
  token: TokenState;
};

export default combineReducers({
  progression,
  skills,
  slides,
  token,
  answersCorrection
});
