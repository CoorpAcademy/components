import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 10.349v-.381C16.191 11.157 13.176 12 9 12s-7.191-.843-9-2.032V12c0 .769 2.216 3 9 3 2.19 0 3.898-.234 5.216-.575A6.002 6.002 0 0 1 18 10.349z" />
      <path d="M9 10c6.784 0 9-2.231 9-3V4.968C16.191 6.157 13.176 7 9 7s-7.191-.843-9-2.032V7c0 .769 2.216 3 9 3zM14.025 16.508c-1.428.309-3.1.492-5.025.492-4.176 0-7.191-.843-9-2.032V16c0 2.626 4.527 4 9 4 2.106 0 4.216-.308 5.867-.904a5.983 5.983 0 0 1-.842-2.588z" />
      <path d="M9 5c5.195 0 7.705-1.307 8.599-2.266C16.404.936 12.688 0 9 0S1.596.936.401 2.734C1.295 3.693 3.805 5 9 5zM20 12c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.127A4.005 4.005 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
