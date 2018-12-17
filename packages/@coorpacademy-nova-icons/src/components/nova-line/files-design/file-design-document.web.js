import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
      <path d="M10 19h6l-3-5z" />
      <circle cx={15.5} cy={12.5} r={1.5} />
      <path d="M7 6h5v2H7zM7 9h6v2H7zM7 12h4v2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
