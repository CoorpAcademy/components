import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M1 21.036h6l1.018-1.017-3-3zM15.829 19c-1.811 0-3.548.72-4.829 2h12v-2h-7.171zM5.084 15.001l8.463-8.462 4.95 4.95-8.463 8.462zM20.45 9.536a2.002 2.002 0 0 0 0-2.83l-2.122-2.121a2 2 0 0 0-2.828 0l-.892.892 4.95 4.949.892-.89z" />
    </g>
  </svg>
);

export default SvgComponent;
