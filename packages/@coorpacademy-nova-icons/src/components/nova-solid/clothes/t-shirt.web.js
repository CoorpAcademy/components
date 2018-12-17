import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <path
      fill="currentColor"
      d="M21.6 7.2l-4-3A.997.997 0 0 0 17 4H7a.997.997 0 0 0-.6.2l-4 3a1 1 0 0 0-.232 1.355l2 3a1 1 0 0 0 1.279.34L6 11.619V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7.381l.553.276a1 1 0 0 0 1.279-.34l2-3A1 1 0 0 0 21.6 7.2zM12 7a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2z"
    />
  </svg>
);

export default SvgComponent;
