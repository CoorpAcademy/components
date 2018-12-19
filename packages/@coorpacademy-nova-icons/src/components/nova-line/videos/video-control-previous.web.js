import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.879 5.249a2.04 2.04 0 0 0-2.107.217L12.4 10.422c-.49.381-.771.957-.771 1.578s.281 1.196.772 1.578l6.372 4.957a2 2 0 0 0 2.107.217A2.015 2.015 0 0 0 22 16.955v-9.91c0-.758-.44-1.463-1.121-1.796zM20 16.956l-6.371-4.955L20 7.045v9.911zM7 3H5c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V5c0-1.104-.897-2-2-2zM5 19V5h2l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
