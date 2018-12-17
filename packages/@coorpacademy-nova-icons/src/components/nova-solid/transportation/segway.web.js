import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 14V7h2.382c.379 0 .725-.214.895-.553L16.759 5H20V3h-2.623a.986.986 0 0 0-.145-.525.998.998 0 0 0-.85-.475H7.618a1 1 0 0 0-.85.475.986.986 0 0 0-.145.525H4v2h3.241l.482 1.447c.17.339.516.553.895.553H11v7H9l-2 4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l-2-4h-2zM20 13a2 2 0 0 0-2 2v5a2 2 0 0 0 4 0v-5a2 2 0 0 0-2-2zM4 13a2 2 0 0 0-2 2v5a2 2 0 0 0 4 0v-5a2 2 0 0 0-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
