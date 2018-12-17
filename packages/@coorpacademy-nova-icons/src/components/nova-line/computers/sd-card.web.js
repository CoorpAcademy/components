import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M15.414 19H8.586L12 15.586z" />
    <path
      d="M18 22H6c-1.103 0-2-.897-2-2V4c0-1.104.897-2 2-2h7.531c.596 0 1.156.262 1.537.72l4.468 5.362A2 2 0 0 1 20 9.362V20c0 1.103-.897 2-2 2zM13.532 4H6v16h12.001L18 9.362 13.532 4z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M7 6h2v3H7zM10 6h2v3h-2z" />
  </svg>
);

export default SvgComponent;
