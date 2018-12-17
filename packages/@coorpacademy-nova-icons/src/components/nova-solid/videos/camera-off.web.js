import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.063 8.354L17 9.503v-.842l5.536-5.536-1.414-1.414L1.708 21.125l1.414 1.415 4.536-4.537H15c1.1 0 2-.9 2-2v-1.5l3.063 1.148c.516.194.937-.098.937-.648v-6c0-.55-.421-.842-.937-.649zM7 6.003c-1.1 0-2 .9-2 2v7.001l9.001-9.001H7z" />
    </g>
  </svg>
);

export default SvgComponent;
