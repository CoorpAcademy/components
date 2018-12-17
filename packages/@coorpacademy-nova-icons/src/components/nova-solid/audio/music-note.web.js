import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M13 8.677V6.724l5.316-1.772-.633-1.898L11 5.283v8.277a3.95 3.95 0 0 0-2-.557c-2.206 0-4 1.794-4 4 0 2.205 1.794 4 4 4s4-1.795 4-4v-6.246l3.941-1.126-.549-1.923L13 8.677z"
    />
  </svg>
);

export default SvgComponent;
