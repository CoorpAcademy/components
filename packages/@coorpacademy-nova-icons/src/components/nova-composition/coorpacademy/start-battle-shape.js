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
    <svg viewBox="0 0 1080 214" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M1494 187.199c-153.2-35.347-386.61-364.069-601.339-95.497-1.719 2.151-3.761 4.399-5.769 6.284C668.003 303.502 668.163 233.506 593.5 248.992 385.236 292.188 150.355 81.008-43 130.899L-8.5 308 1173 281.992l321-94.793z"
          fill="#1D1C31"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h1080v214H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SvgComponent;
