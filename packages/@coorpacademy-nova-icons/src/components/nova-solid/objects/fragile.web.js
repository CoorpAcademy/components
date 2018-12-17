import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M18 11a.852.852 0 0 0-.008-.124l-1-8A1 1 0 0 0 16 2h-1.434L12.26 5.845 14.414 8l-2.707 2.707-1.414-1.413L11.586 8 9.74 6.155 12.234 2H8a1 1 0 0 0-.992.876l-1 8A.852.852 0 0 0 6 11c0 2.967 2.167 5.431 5 5.91V20H8v2h8v-2h-3v-3.09c2.833-.479 5-2.943 5-5.91z"
    />
  </svg>
);

export default SvgComponent;
