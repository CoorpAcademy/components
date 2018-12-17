import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M0 12c0 .685.07 1.354.201 2H4v-4H.201A10.057 10.057 0 0 0 0 12zM.841 8H4V4.019A10.036 10.036 0 0 0 .841 8zM4 19.98V16H.841A10.026 10.026 0 0 0 4 19.98zM6 10h4v4H6zM6 21.159A9.933 9.933 0 0 0 10 22v-6H6v5.159zM6 8h4V2a9.933 9.933 0 0 0-4 .841V8zM22 2h-8c-1.104 0-2 .897-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4c0-1.103-.896-2-2-2zm-3 19h-2v-2h2v2zm3-3h-8V4h8v14z" />
    </g>
  </svg>
);

export default SvgComponent;
