import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M11.858 3.001C11.411 1.281 9.858 0 8 0 5.794 0 4 1.794 4 4s1.794 4 4 4c1.858 0 3.41-1.279 3.857-2.999h2.144L14 7.002h2L16.001 5h2L18 8h2l.001-3H22V3l-10.142.001zM8 6c-1.103 0-2-.897-2-2 0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2zM19 13h-2c0-2.206-1.794-4-4-4s-4 1.794-4 4H7c-1.103 0-2 .896-2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c0-1.104-.897-2-2-2zm-6-2c1.103 0 2 .896 2 2h-4c0-1.104.897-2 2-2zM7 22v-7h12l.001 7H7z" />
    </g>
  </svg>
);

export default SvgComponent;
