import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#prefix__filter0_d)">
      <path
        d="M71.478 111.363l-51.58-52.642h22.427L18.93 18 71.572 69.92H48.16l23.318 41.442z"
        fill="#FFD942"
      />
      <path
        d="M71.478 111.363l-10.592-10.814-17.242-30.628h4.508l23.326 41.442zm-4.413-41.442L24.826 28.266 18.93 18 71.572 69.92h-4.507z"
        fill="#FFA81C"
      />
    </g>
    <defs>
      <filter
        id="prefix__filter0_d"
        x={0.93}
        y={0}
        width={88.642}
        height={129.364}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation={9} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.658824 0 0 0 0 0.109804 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgComponent;
