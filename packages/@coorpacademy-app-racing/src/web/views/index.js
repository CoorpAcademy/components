import SlidesPlayer from '@coorpacademy/components/es/template/app-player/player/slides/slides-player';
import RacingInterquestion from '@coorpacademy/components/es/template/app-racing/interquestion/index';
import pipe from 'lodash/fp/pipe';
import {createElement} from 'react';

export const createStateToVNode = (template, mapStateToProps) =>
  pipe(mapStateToProps, props => createElement(template, props));

export const views = {
  player: SlidesPlayer,
  race: RacingInterquestion
};
