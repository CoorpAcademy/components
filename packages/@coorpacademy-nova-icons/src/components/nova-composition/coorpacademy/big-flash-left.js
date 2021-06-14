import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 250 320" fill="none" {...props}>
    <g filter="url(#prefix__filter0_d)">
      <path
        d="M131.249 220L20.087 106.548h48.332L18 18.785l113.452 111.901H80.996L131.25 220z"
        fill="#FFD942"
      />
      <path
        d="M131.249 220l-22.827-23.307-37.159-66.007h9.715L131.249 220zm-9.511-89.314L30.706 40.911 18 18.785l113.452 111.901h-9.714z"
        fill="#FFA81C"
      />
    </g>
    <defs>
      <filter
        id="prefix__filter0_d"
        x={0}
        y={0.785}
        width={149.452}
        height={237.215}
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
