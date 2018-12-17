import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.002c-5.523 0-10 4.476-10 10s4.477 10 10 10 10-4.476 10-10-4.478-10-10-10zm-1 11c0 1.654-1.346 3-3 3s-3-1.346-3-3v-5h2v5a1.001 1.001 0 0 0 2 0v-5h2v5zm6.021 3h-2.058l-1.963-8h2l.985 3.901.957-3.901H19l-2 7.919.021.081z"
    />
  </svg>
);

export default SvgComponent;
