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
        <path d="M5 19V3H3v17a1 1 0 001 1h17v-2H5z" />
        <path d="M11 12.415l2.293 2.293a.999.999 0 001.414 0l6-6-1.414-1.414L14 12.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4 1.414 1.414L11 12.415z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
