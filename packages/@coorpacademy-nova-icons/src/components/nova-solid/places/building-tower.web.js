import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M14.861 21L14 2.474a1 1 0 0 0-.167-.507L12.819.446a1 1 0 0 0-1.664-.001l-1.014 1.521a.997.997 0 0 0-.167.508L9.136 21h5.725zM5 22h14v2H5z" />
    </g>
  </svg>
);

export default SvgComponent;
