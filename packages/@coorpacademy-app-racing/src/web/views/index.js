import Loading from '@coorpacademy/components/es/template/app-player/loading';
import SlidesPlayer from '@coorpacademy/components/es/template/app-player/player/slides/slides-player';
import RacingInterquestion from '@coorpacademy/components/es/template/app-racing/interquestion';
import pipe from 'lodash/fp/pipe';
import {createElement} from 'react';

export const createStateToVNode = (template, mapStateToProps) =>
  pipe(mapStateToProps, props => createElement(template, props));

export const views = {
  loading: Loading,
  player: SlidesPlayer,
  race: RacingInterquestion
};
