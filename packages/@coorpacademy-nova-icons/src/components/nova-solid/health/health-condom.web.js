import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002 0h24.001v24.001H-.002z" />
    <path
      fill="currentColor"
      d="M20.121 8.122a3.003 3.003 0 0 0 0-4.243c-1.133-1.134-3.111-1.133-4.241 0l-.015.015a4.992 4.992 0 0 0-4.229 1.4l-7.778 7.779-.708-.708-1.414 1.414 8.485 8.485 1.414-1.414-.707-.707 7.778-7.777a5.006 5.006 0 0 0 1.4-4.229l.015-.015zm-8 3.171l-1.414-1.414 4-4 1.414 1.414-4 4z"
    />
  </svg>
);

export default SvgComponent;
