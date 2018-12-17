import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 15c2.757 0 5-2.243 5-5V4h-2v2h-2V3h-2v3H9V4H7v6c0 2.757 2.243 5 5 5zm0-2a3.006 3.006 0 0 1-2.829-2h5.657A3.004 3.004 0 0 1 12 13zM9 8h6v1H9V8zM12 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zm2 2.197l-2 3-2-3c.616-.127 1.285-.197 2-.197s1.384.07 2 .197zm-5.943.691L10.132 22H6c0-1.312.768-2.402 2.057-3.112zM13.868 22l2.075-3.112C17.232 19.598 18 20.688 18 22h-4.132z" />
    </g>
  </svg>
);

export default SvgComponent;
