import {createElement} from 'react';
import pipe from 'lodash/fp/pipe';
import {increment, decrement} from '../actions';

const createMapStateToProps = ({api}) => dispatch => (state, params) => {
  const {counter} = state;

  return {
    counter,
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

export {createMapStateToProps};

const View = ({counter = 0, onIncrement, onDecrement}) =>
  createElement(
    'div',
    null,
    createElement('span', null, `${counter}`),
    createElement(
      'button',
      {
        onClick: onIncrement
      },
      '+'
    ),
    createElement(
      'button',
      {
        onClick: onDecrement
      },
      '-'
    )
  );

export default options => dispatch => {
  const mapStateToProps = createMapStateToProps(options)(dispatch);

  return pipe(mapStateToProps, View);
};
