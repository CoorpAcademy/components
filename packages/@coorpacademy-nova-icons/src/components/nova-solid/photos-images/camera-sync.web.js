import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 11.508v2.244c.65.423 1 .863 1 1.248 0 .983-2.264 2.319-6 2.809v2.008c4.261-.528 8-2.18 8-4.817 0-1.487-1.197-2.657-3-3.492zM10 16v1.918c-4.33-.362-7-1.85-7-2.918 0-.386.35-.826 1-1.248v-2.244c-1.803.835-3 2.005-3 3.492 0 2.843 4.341 4.539 9 4.918V22l3-3-3-3zM7 13h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1.382a.999.999 0 0 1-.895-.552l-.447-.895A.998.998 0 0 0 13.382 2h-2.764a1 1 0 0 0-.895.553l-.447.895a.998.998 0 0 1-.894.553H7a1 1 0 0 0-1 1v7c0 .552.447.999 1 .999zm5-7.999a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </g>
  </svg>
);

export default SvgComponent;
