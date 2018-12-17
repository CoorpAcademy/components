import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 22H4c-1.103 0-2-.897-2-2V4c0-1.102.897-2 2-2h16c1.103 0 2 .898 2 2v16c0 1.103-.897 2-2 2zM4 4v16h16.001L20 4H4z"
      fill="currentColor"
    />
    <path
      d="M15 10a3.001 3.001 0 0 0-6 0c0 1.157.662 2.149 1.622 2.65L10 17h4l-.622-4.35A2.988 2.988 0 0 0 15 10z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
