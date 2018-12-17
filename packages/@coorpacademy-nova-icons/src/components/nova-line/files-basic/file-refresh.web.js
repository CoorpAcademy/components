import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 17c-.662 0-1.27-.223-1.766-.587L12 15H7v4l1.646-1.317C9.536 18.493 10.706 19 12 19a5.008 5.008 0 0 0 4.899-4h-2.083A2.996 2.996 0 0 1 12 17zM15.354 10.318A4.964 4.964 0 0 0 12 9a5.008 5.008 0 0 0-4.899 4h2.083a2.994 2.994 0 0 1 2.815-2c.662 0 1.27.223 1.766.587L12 13h5V9l-1.646 1.318z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
