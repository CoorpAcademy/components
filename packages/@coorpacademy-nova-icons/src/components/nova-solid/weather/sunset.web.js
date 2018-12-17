import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2.002h2v3h-2zM19.365 4.223l1.414 1.414-2.122 2.122-1.414-1.414zM20 11.002h3v2h-3zM19.364 19.78l-2.122-2.121 1.414-1.415 2.122 2.122zM12 19.002h2v3h-2zM6.635 19.78L5.22 18.367l2.122-2.122 1.414 1.415zM3 11.002h3v2H3zM6.635 4.224l2.122 2.122L7.343 7.76 5.221 5.638zM14 7.102v3.899h2l-3 3-3-3h2V7.102a5 5 0 1 0 6 4.899 5.002 5.002 0 0 0-4-4.899z" />
    </g>
  </svg>
);

export default SvgComponent;
