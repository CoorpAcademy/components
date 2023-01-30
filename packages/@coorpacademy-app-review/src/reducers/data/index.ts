import {combineReducers} from 'redux';

import corrections, {CorrectionsState} from './corrections';
import progression, {ProgressionState} from './progression';
import slides, {SlidesState} from './slides';
import token, {TokenState} from './token';
import rank, {RankState} from './rank';
import currentSkill, {CurrentSkillState} from './current-skill';
import videos, {VideoPropsState} from './videos';

export type DataState = {
  corrections: CorrectionsState;
  progression: ProgressionState;
  slides: SlidesState;
  token: TokenState;
  rank: RankState;
  currentSkill: CurrentSkillState;
  videos: VideoPropsState;
};

export default combineReducers({
  corrections,
  progression,
  slides,
  token,
  rank,
  currentSkill,
  videos
});
