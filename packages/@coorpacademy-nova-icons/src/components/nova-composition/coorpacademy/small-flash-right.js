import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 94 139" fill="none" {...props}>
    <g filter="url(#prefix__filter0_d)">
      <path
        d="M75.896 18l-56.83 58h24.71L18 120.867 76 63.66H50.205L75.896 18z"
        fill="#FFD942"
      />
      <path
        d="M75.896 18l-11.67 11.915L45.23 63.66h4.966L75.896 18zm-4.862 45.66l-46.538 45.896L18 120.867 76 63.66h-4.966z"
        fill="#FFA81C"
      />
    </g>
    <defs>
      <filter
        id="prefix__filter0_d"
        x={0}
        y={0}
        width={94}
        height={138.867}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
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
