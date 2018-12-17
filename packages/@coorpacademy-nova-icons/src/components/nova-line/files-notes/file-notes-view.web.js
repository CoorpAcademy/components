import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15.665 15.19A4.487 4.487 0 0 0 16 13.5c0-2.481-2.019-4.5-4.5-4.5S7 11.019 7 13.5c0 2.482 2.019 4.5 4.5 4.5.598 0 1.167-.122 1.69-.335l1.108 1.108c.331.33.77.513 1.237.513s.907-.183 1.237-.513.513-.77.513-1.237c0-.467-.182-.907-.513-1.237l-1.107-1.109zM11.5 16C10.122 16 9 14.878 9 13.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5z" />
      <path d="M19 2h-2V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H9V1a1 1 0 0 0-2 0v1H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM5 22V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2l.001 18H5z" />
    </g>
  </svg>
);

export default SvgComponent;
