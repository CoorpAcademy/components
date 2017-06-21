import Player from '@coorpacademy/components/es/template/app-player/player';
import headerProps from './state-to-props/header';
import playerProps from './state-to-props/player';
import createView from './create-view';

export const slideStateToProps = (options, dispatch) => state => {
  return {
    header: headerProps(state),
    player: playerProps(state, dispatch)
  };
};

const createSlide = (options, dispatch) => {
  return createView(options, dispatch, Player, slideStateToProps);
};

export default createSlide;
