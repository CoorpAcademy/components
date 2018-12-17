import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24H0z" />
    <g fill="currentColor">
      <path d="M17.895 16.553a1 1 0 0 0-.657-.52A7.977 7.977 0 0 0 20 10c0-4.411-3.589-8-8-8s-8 3.589-8 8a7.974 7.974 0 0 0 2.763 6.033.998.998 0 0 0-.657.52l-2 4A1.001 1.001 0 0 0 5 22h14a1.003 1.003 0 0 0 .895-1.448l-2-3.999zM6 10c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm.618 10l1-2h8.764l1 2H6.618z" />
      <circle cx={12} cy={8} r={2} />
      <circle cx={12} cy={13} r={3} />
    </g>
  </svg>
);

export default SvgComponent;
