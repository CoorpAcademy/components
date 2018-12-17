import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 11c0-.101-.995-8.024-1.008-8.124A1 1 0 0 0 16 2H8a1 1 0 0 0-.992.875C6.995 2.976 6 10.899 6 11c0 2.967 2.167 5.432 5 5.91V20H8v2h8v-2h-3v-3.09c2.833-.479 5-2.943 5-5.91zm-2.883-7l.375 3H8.508l.375-3h6.234z"
    />
  </svg>
);

export default SvgComponent;
