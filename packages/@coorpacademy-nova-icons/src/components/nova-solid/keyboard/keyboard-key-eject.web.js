import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2H4c-1.102 0-2 .897-2 2v16c0 1.103.898 2 2 2h16c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zm-2 15H6v-3h12v3zM6 13l6-6 6 6H6z"
    />
  </svg>
);

export default SvgComponent;
