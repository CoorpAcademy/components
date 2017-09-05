import {createElement} from 'react';
import pipe from 'lodash/fp/pipe';
import createMapStateToProps from './state-to-props';

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

const appTemplate = options => dispatch => {
  const mapStateToProps = createMapStateToProps(options)(dispatch);

  return pipe(mapStateToProps, View);
};

export default appTemplate;
