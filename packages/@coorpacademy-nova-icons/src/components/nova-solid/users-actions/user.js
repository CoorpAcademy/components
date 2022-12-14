import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(!ariaLabel &&
      !alt && {
        'aria-hidden': 'true'
      })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <g fill="currentColor">
        <path d="M12.002 12.006c2.206 0 4-1.795 4-4s-1.794-4-4-4-4 1.795-4 4 1.795 4 4 4zM12.002 13.006c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
