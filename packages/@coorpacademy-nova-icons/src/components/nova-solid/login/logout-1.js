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
      <path
        fill="currentColor"
        d="M18 2H7c-1.103 0-2 .898-2 2v7h7.59l-2.297-2.292 1.413-1.416 4.708 4.699-4.706 4.715-1.416-1.412L12.582 13H5v7c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2z"
      />
    </svg>
  );
};

export default SvgComponent;
