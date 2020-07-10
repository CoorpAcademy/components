import {Loading, Player, PopinCorrection, PopinEnd} from '@coorpacademy/components';

import {pipe} from 'lodash/fp';
import {createElement} from 'react';

export const createStateToVNode = (template, mapStateToProps) =>
  pipe(mapStateToProps, props => createElement(template, props));

export const views = {
  loading: Loading,
  player: Player,
  popinEnd: PopinEnd,
  popinCorrection: PopinCorrection
};
