import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 161 240" fill="none" {...props}>
    <g filter="url(#prefix__filter0_d)">
      <path
        d="M142.776 0L20.299 125h53.252L18 221.695l125-123.29H87.408L142.776 0z"
        fill="#FFD942"
      />
      <path
        d="M142.776 0l-25.15 25.68-40.941 72.725h10.703L142.776 0zm-10.479 98.405L32 197.318l-14 24.377 125-123.29h-10.703z"
        fill="#FFA81C"
      />
    </g>
    <defs>
      <filter
        id="prefix__filter0_d"
        x={0}
        y={-18}
        width={161}
        height={257.695}
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
