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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 43" {...props}>
      <defs>
        <radialGradient
          id="prefix__a"
          cx={0.5}
          cy={1}
          r={1}
          gradientTransform="matrix(0 -1 .5 0 0 1.5)"
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="currentColor" stopOpacity={0.365} />
          <stop offset={0.752} stopColor="currentColor" stopOpacity={0} />
          <stop offset={1} stopColor="currentColor" stopOpacity={0} />
        </radialGradient>
      </defs>
      <path data-name="Rectangle 57" fill="url(#prefix__a)" d="M0 0h94v43H0z" />
    </svg>
  );
};

export default SvgComponent;
