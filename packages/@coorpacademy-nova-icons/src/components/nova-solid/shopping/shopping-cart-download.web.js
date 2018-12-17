import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={21.999} r={2} />
      <circle cx={16} cy={21.999} r={2} />
      <path d="M20 3.999c-.466 0-.869.321-.975.775l-.975 4.225h-7.31A6.984 6.984 0 0 1 5 12c-.182 0-.359-.014-.537-.027l1.567 6.268a1 1 0 0 0 .97.758h10a1 1 0 0 0 .975-.775l2.821-12.225H24v-2h-4zM9.707 4.706L8.293 3.292 6 5.585V-.001H4v5.586L1.707 3.292.293 4.706 5 9.413z" />
    </g>
  </svg>
);

export default SvgComponent;
