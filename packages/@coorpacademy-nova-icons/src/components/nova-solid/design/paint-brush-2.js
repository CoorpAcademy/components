import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.268 4.501a2.498 2.498 0 00-3.535 0l-3.536 3.535-1.414-1.414a2 2 0 00-2.828 0L8.54 8.036l9.192 9.192 1.414-1.414a2 2 0 000-2.828l-1.414-1.413 3.535-3.537a2.499 2.499 0 00.001-3.535zm-1.414 2.828a1 1 0 11-1.414-1.415 1 1 0 011.414 1.415zM6.418 11.573c-1.414 1.413-3.145 1.097-3.535.706a1 1 0 000 1.415l6.364 6.363c2.121 2.121 4.242 0 4.242 0l2.829-2.829L8.54 9.451l-2.122 2.122z" />
    </g>
  </svg>
);

export default SvgComponent;
