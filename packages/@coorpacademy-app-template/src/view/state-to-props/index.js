import {increment, decrement} from '../../actions';

const createMapStateToProps = ({api}) => dispatch => (state, params) => {
  const {counter} = state;

  return {
    counter,
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

export default createMapStateToProps;
