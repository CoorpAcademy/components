import Provider from '@coorpacademy/components/es/atom/provider';
import Loading from '@coorpacademy/components/es/template/app-player/loading';
import Player from '@coorpacademy/components/es/template/app-player/player';
import PopinCorrection from '@coorpacademy/components/es/template/app-player/popin-correction';
import PopinEnd from '@coorpacademy/components/es/template/app-player/popin-end';
import pipe from 'lodash/fp/pipe';
import {createElement} from 'react';

export const createView = options => (template, mapStateToProps) =>
  pipe(
    mapStateToProps,
    props => createElement(template, props),
    vNode => createElement(Provider, options, vNode)
  );

export const views = {
  loading: Loading,
  player: Player,
  popinEnd: PopinEnd,
  popinCorrection: PopinCorrection
};
