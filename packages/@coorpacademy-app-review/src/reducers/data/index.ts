import {combineReducers} from 'redux';

import corrections, {CorrectionsState} from './corrections';
import progression, {ProgressionState} from './progression';
import skills, {SkillsState} from './skills';
import slides, {SlidesState} from './slides';
import token, {TokenState} from './token';

export type DataState = {
  isFetching?: boolean;
  corrections: CorrectionsState;
  progression: ProgressionState;
  skills: SkillsState;
  slides: SlidesState;
  token: TokenState;
};

export default combineReducers({corrections, progression, skills, slides, token});
