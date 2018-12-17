import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17.414 4H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8.586L17.414 4zM5 17l2.478-3.977 1.527 2.451 3.522-5.648L17 17H5zm11-7V5l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
