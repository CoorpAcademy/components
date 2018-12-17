import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 1.001a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .985v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.104-.897 2-2 2H8c-1.102 0-2-.896-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z" />
      <path d="M12 8.001a3 3 0 0 0-3 3c0 1.656 3 6 3 6s3-4.344 3-6c0-1.656-1.344-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5z" />
    </g>
  </svg>
);

export default SvgComponent;
