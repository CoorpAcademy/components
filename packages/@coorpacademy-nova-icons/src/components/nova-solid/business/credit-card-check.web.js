import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v2h20V2zM19 14c.339 0 .668.036.991.09.001-.031.009-.059.009-.09V6H0v8c0 1.102.897 2 2 2h12.537A5.98 5.98 0 0 1 19 14zM8 13H3v-2h5v2zm2-3H3V8h7v2zm3-2h4v2h-4V8zM22.293 16.293L18 20.587l-2.293-2.294-1.414 1.413L18 23.415l5.707-5.709z" />
    </g>
  </svg>
);

export default SvgComponent;
