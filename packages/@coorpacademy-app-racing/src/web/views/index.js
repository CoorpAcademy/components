import Loading from '@coorpacademy/components/es/template/app-player/loading';
import Game from '@coorpacademy/components/es/template/app-racing/game';
import pipe from 'lodash/fp/pipe';
import {createElement} from 'react';

export const createStateToVNode = (template, mapStateToProps) =>
  pipe(mapStateToProps, props => createElement(template, props));

export const views = {
  loading: Loading,
  game: Game
};
