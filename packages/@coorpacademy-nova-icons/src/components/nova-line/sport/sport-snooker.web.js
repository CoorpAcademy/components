import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M22.885 20.535l-10-19c-.346-.658-1.424-.658-1.77 0l-10 19A1 1 0 0 0 2 22h20a1.002 1.002 0 0 0 .885-1.465zM3.656 20L12 4.146 20.344 20H3.656z" />
      <circle cx={12} cy={9.5} r={1.5} />
      <circle cx={12} cy={17.5} r={1.5} />
      <circle cx={14.5} cy={13.5} r={1.5} />
      <circle cx={9.5} cy={13.5} r={1.5} />
      <circle cx={7.5} cy={17.5} r={1.5} />
      <circle cx={16.5} cy={17.5} r={1.5} />
    </g>
  </svg>
);

export default SvgComponent;
