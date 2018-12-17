import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 3h-7V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 3h4v8.586l-1.293-1.293a.997.997 0 0 0-1.414 0L7 11.586V3zm12.997 17H4V5h1v9a1 1 0 0 0 1.707.707L9 12.414l2.293 2.293A1 1 0 0 0 13 14V5h7l-.003 15z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M14 7h4v2h-4zM14 10h4v2h-4zM14 13h4v2h-4zM6 16h12v2H6z"
    />
  </svg>
);

export default SvgComponent;
