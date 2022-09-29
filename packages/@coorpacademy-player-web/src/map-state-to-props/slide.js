import {__, mapValues, pipe} from 'lodash/fp';

import createPlayerStateToProps from './player';
import mapStateToErrorPopinProps from './error-popin';

const playerProps = (options, dispatch) => {
  return pipe(
    state => mapStateToProps => mapStateToProps(state),
    mapValues(__, {
      player: createPlayerStateToProps(options, dispatch),
      popin: mapStateToErrorPopinProps(dispatch)
    })
  );
};

export default playerProps;
