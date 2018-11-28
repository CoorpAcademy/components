import __ from 'lodash/fp/__';
import mapValues from 'lodash/fp/mapValues';
import pipe from 'lodash/fp/pipe';
import createPlayerStateToProps from './player';

const playerProps = (options, dispatch) => {
  return pipe(
    state => mapStateToProps => mapStateToProps(state),
    mapValues(__, {
      player: createPlayerStateToProps(options, dispatch)
    })
  );
};

export default playerProps;
