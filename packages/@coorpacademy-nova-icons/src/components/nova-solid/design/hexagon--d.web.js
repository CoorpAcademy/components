import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="#767676"
      d="M15.963 2H8.016L5 5v14l3.016 3h7.948L19 19V5l-3.037-3zM9 20l-2-2V8l2 2v10zm8-2l-2 2V10l2-2v10zM15 8H9L7 6l2-2h6l2 2-2 2z"
    />
  </svg>
);

export default SvgComponent;
