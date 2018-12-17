import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <circle cx={12} cy={10.5} r={1.5} />
      <path d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm4.5 11a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.382a1 1 0 0 0 .895-.553l.447-.895A1 1 0 0 1 11.118 6h1.764a1 1 0 0 1 .895.553l.447.895a1 1 0 0 0 .894.552h.382a1 1 0 0 1 1 1v4z" />
    </g>
  </svg>
);

export default SvgComponent;
