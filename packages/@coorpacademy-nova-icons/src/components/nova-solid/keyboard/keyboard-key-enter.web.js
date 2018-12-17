import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 10.998a1 1 0 0 1-1 1H9V16l-3-3 3-3v1.998h7V9h2v3.998z"
    />
  </svg>
);

export default SvgComponent;
