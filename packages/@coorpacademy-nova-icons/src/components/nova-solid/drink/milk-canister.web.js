import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.2 4.4l-1.629 2.173L20 8l1.8-2.4zM3.8 4.4L2.2 5.6 4 8l1.429-1.427zM5 10v10c0 1.103.897 2 2 2h10c1.104 0 2-.897 2-2V10H5z" />
      <g>
        <path d="M7 2h10v2H7zM18.707 8.293L16 5.586V5H8v.586L5.293 8.293A.997.997 0 0 0 5 9h14a.997.997 0 0 0-.293-.707z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
