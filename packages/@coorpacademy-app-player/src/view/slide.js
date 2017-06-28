import __ from 'lodash/fp/__';
import mapValues from 'lodash/fp/mapValues';
import pipe from 'lodash/fp/pipe';
import Player from '@coorpacademy/components/es/template/app-player/player';
import createHeaderStateToProps from './state-to-props/header';
import createPlayerStateToProps from './state-to-props/player';
import createView from './create-view';

export const createSlideStateToProps = (options, dispatch) => {
  return pipe(
    state => mapStateToProps => mapStateToProps(state),
    mapValues(__, {
      header: createHeaderStateToProps(options, dispatch),
      player: createPlayerStateToProps(options, dispatch)
    })
  );
};

const createSlide = createView(Player, createSlideStateToProps);

export default createSlide;
