import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 9v5h5a5 5 0 0 0-5-5z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
      <path d="M10 10.275c-1.744.62-3 2.269-3 4.225a4.5 4.5 0 0 0 4.5 4.5c1.957 0 3.604-1.256 4.225-3H10v-5.725z" />
    </g>
  </svg>
);

export default SvgComponent;
