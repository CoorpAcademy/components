import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 18s-5.119-3.028-5.119-6.236c0-3.047 3.989-4.162 5.119-.163 1.13-4 5.119-2.885 5.119.163 0 3.459-4.686 5.983-5.119 6.236zm9-15h-2V1h-2v5h-1V3H8V1H6v5H5V3H3c-1.103 0-2 .898-2 2v15c0 1.102.897 2 2 2h18c1.103 0 2-.898 2-2V5c0-1.103-.897-2-2-2z"
    />
  </svg>
);

export default SvgComponent;
