import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zM8.828 6.758l1.414 1.415L7.414 11 6 9.586l2.828-2.828zM15 18h-2l-1-1.5-1 1.5H9l-2-3h2l1 1.5 1-1.5h2l1 1.5 1-1.5h2l-2 3zm1.586-7l-2.828-2.828 1.414-1.415L18 9.586 16.586 11z"
    />
  </svg>
);

export default SvgComponent;
