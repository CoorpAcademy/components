import __ from 'lodash/fp/__';
import mapValues from 'lodash/fp/mapValues';
import pipe from 'lodash/fp/pipe';
import createHeaderStateToProps from './header';
import createPlayerStateToProps from './player';

// eslint-disable-next-line import/prefer-default-export
export const createSlideStateToProps = (options, dispatch) => {
  return pipe(
    state => mapStateToProps => mapStateToProps(state),
    mapValues(__, {
      header: createHeaderStateToProps(options, dispatch),
      player: createPlayerStateToProps(options, dispatch)
    })
  );
};
