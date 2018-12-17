import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M12 16.001c-2.205 0-4-1.795-4-4 0-2.206 1.795-4 4-4s4 1.794 4 4-1.795 4-4 4zm0-6a2 2 0 0 0 0 4c1.104 0 2-.898 2-2 0-1.103-.896-2-2-2zM19.793 2.794l1.414 1.414-4.5 4.5-1.414-1.414zM10 17.001h4v2h-4zM10 20.001h4v2h-4zM8.293 5.294l1.414 1.414-3 3-1.414-1.414zM5.293 2.294l1.414 1.414-3 3-1.414-1.414z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
