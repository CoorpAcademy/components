import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v2h20V2zM20 6H0v8c0 1.102.897 2 2 2h13.537A5.978 5.978 0 0 1 20 14V6zM8 13H3v-2h5v2zm2-3H3V8h7v2zm7 0h-4V8h4v2zM23.707 17.706l-1.414-1.413L20 18.587l-2.293-2.294-1.414 1.413L18.586 20l-2.293 2.293 1.414 1.413L20 21.415l2.293 2.291 1.414-1.413L21.414 20z" />
    </g>
  </svg>
);

export default SvgComponent;
