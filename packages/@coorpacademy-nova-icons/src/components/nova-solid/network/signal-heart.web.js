import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.121 10.879l1.414-1.414c-.944-.944-2.199-1.464-3.535-1.464s-2.592.52-3.535 1.464l1.415 1.414c1.13-1.133 3.107-1.134 4.241 0z" />
      <path d="M5.637 6.637l1.414 1.414A6.95 6.95 0 0 1 12 6c1.87 0 3.627.728 4.949 2.051l1.414-1.414C16.664 4.937 14.404 4 12 4s-4.664.938-6.363 2.637z" />
      <path d="M2.809 3.808l1.414 1.414A10.927 10.927 0 0 1 12 2a10.92 10.92 0 0 1 7.777 3.223l1.414-1.414C16.123-1.261 7.876-1.26 2.809 3.808zM14.002 13.002c-.736 0-1.452.332-2 .846-.549-.514-1.266-.846-2-.846-2.393 0-4 1.608-4 3.998 0 3.467 4.924 6.521 5.484 6.858a1.006 1.006 0 0 0 1.03 0c.562-.337 5.486-3.391 5.486-6.858 0-2.39-1.607-3.998-4-3.998z" />
    </g>
  </svg>
);

export default SvgComponent;
