import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 10.999c2.205 0 4-1.793 4-3.999 0-2.206-1.795-4-4-4S3 4.794 3 7a4.004 4.004 0 0 0 4 3.999zM7 5a2 2 0 1 1-2 2c0-1.102.896-2 2-2zM17 13c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 6c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2zM3.293 19.293l16-16 1.413 1.414-16 16z" />
    </g>
  </svg>
);

export default SvgComponent;
