import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, role, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: role || 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0_258_3070)">
        <path
          d="M21.956 16.706L18.331 4.925A2.714 2.714 0 0015.726 3 2.73 2.73 0 0013 5.726V7h-2V5.726A2.73 2.73 0 008.274 3c-1.204 0-2.25.774-2.605 1.925L2.044 16.706A1.007 1.007 0 002 17v.5C2 19.982 4.019 22 6.5 22s4.5-2.018 4.5-4.5V13h2v4.5c0 2.482 2.019 4.5 4.5 4.5s4.5-2.018 4.5-4.5V17c0-.1-.015-.199-.044-.294zM6.5 20A2.503 2.503 0 014 17.5C4 16.122 5.122 15 6.5 15S9 16.122 9 17.5 7.878 20 6.5 20zM9 13.762A4.474 4.474 0 006.5 13a4.43 4.43 0 00-1.288.21L7.58 5.512A.727.727 0 019 5.726v8.036zM11 11V9h2v2h-2zm4-4V5.726a.727.727 0 011.42-.213l2.368 7.698A4.398 4.398 0 0017.5 13c-.925 0-1.784.282-2.5.762V7zm2.5 13a2.503 2.503 0 01-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_258_3070">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SvgComponent;
