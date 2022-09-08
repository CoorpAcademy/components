import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 94 43" {...props}>
    <defs>
      <radialGradient
        id="prefix__a"
        cx={0.5}
        cy={1}
        r={1}
        gradientTransform="matrix(0 -1 .5 0 0 1.5)"
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#757575" stopOpacity={0.365} />
        <stop offset={0.752} stopColor="#757575" stopOpacity={0} />
        <stop offset={1} stopColor="#757575" stopOpacity={0} />
      </radialGradient>
    </defs>
    <path data-name="Rectangle 57" fill="url(#prefix__a)" d="M0 0h94v43H0z" />
  </svg>
);

export default SvgComponent;
