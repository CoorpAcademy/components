import {combineReducers} from 'redux';

import corrections, {CorrectionsState} from './corrections';
import progression, {ProgressionState} from './progression';
import skills, {SkillsState} from './skills';
import slides, {SlidesState} from './slides';
import token, {TokenState} from './token';
import rank, {RankState} from './rank';
import {SkillState} from './skill';

export type DataState = {
  corrections: CorrectionsState;
  progression: ProgressionState;
  skills: SkillsState;
  slides: SlidesState;
  token: TokenState;
  rank: RankState;
  currentSkill: SkillState
};

export default combineReducers({corrections, progression, skills, slides, token, rank});
