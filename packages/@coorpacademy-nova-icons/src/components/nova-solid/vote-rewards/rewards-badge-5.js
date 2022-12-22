import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(ariaLabel || alt
      ? {
          role: 'img'
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 .002h24v24H0z" />
      <g fill="currentColor">
        <path d="M20 17.203l-7.427-5.201a1.002 1.002 0 00-1.146 0L4 17.203v2.44l8-5.602 8 5.602v-2.44z" />
        <path d="M20 12.381l-7.427-5.199a.999.999 0 00-1.146 0L4 12.381v2.44l8-5.6 8 5.6v-2.44z" />
        <path d="M20 7.381l-7.427-5.199a.999.999 0 00-1.146 0L4 7.381v2.44l8-5.6 8 5.6v-2.44z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
