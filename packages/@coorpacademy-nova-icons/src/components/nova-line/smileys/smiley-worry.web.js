import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <path d="M8 7h2v3H8zM14 7h2v3h-2zM15.127 12.714L12 14.799l-3.127-2.085-2.58 2.579 1.414 1.414 1.42-1.42L12 17.202l2.873-1.915 1.42 1.42 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
