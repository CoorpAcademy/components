import {__, mapValues, pipe} from 'lodash/fp';

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
