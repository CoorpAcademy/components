import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24.002h-24z" />
    <path
      d="M20 19v1c0 .551-.449 1-1 1h-3v-3h2c1.103 0 2-.897 2-2 0-2.757-2.243-5-5-5h-2V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8.838c-.094.283-1 2.896-1 3.162 0 1.654 1.346 3 3 3v3H5c-.551 0-1-.449-1-1v-1H2v1c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-1h-2zM7 16c-.506 0-.925-.377-.991-.865l.939-2.818A.98.98 0 0 0 7 12V4h4v1H8v2h3v2H8v2h3v1a1 1 0 0 0 1 1h3c1.654 0 3 1.346 3.001 3H7zm2 5v-3h5v3H9z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
