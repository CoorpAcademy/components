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
      <path fill="none" d="M0 0h24v24H0z" />
      <g fill="currentColor">
        <path d="M19.707 9.706l-1.414-1.414L16 10.585l-2.293-2.293-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414L16 13.413l2.293 2.293 1.414-1.414-2.293-2.293z" />
        <path d="M6 15.999v-8h10v-4c0-1.104-.897-2-2-2H6c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H6zm8-12v2H6v-2h8zm-8 16v-2h8v2H6z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
