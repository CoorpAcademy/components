import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <g fill="currentColor">
      <path d="M12 2C9.795 2 8 3.795 8 6v1h2V6c0-1.103.896-2 2-2s2 .897 2 2v13h2V6c0-2.205-1.795-4-4-4z" />
      <circle cx={15} cy={21} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
