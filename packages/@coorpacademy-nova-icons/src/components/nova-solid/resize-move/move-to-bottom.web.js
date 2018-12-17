import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .007h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 2.999h-6v2h6c1.104 0 2 .897 2 2v10a2 2 0 0 1-2 2h-1.586l1.293-1.293-1.414-1.414-3.707 3.707 3.707 3.707 1.414-1.414-1.293-1.293H18c2.205 0 4-1.795 4-4v-10c0-2.205-1.795-4-4-4zM9 .999H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM9 8.999H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4H4v-2h4v2zM9 16.999H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4H4v-2h4v2z" />
    </g>
  </svg>
);

export default SvgComponent;
