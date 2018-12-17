import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M15.707 15.293l-1.414 1.414L12 14.414l-2.293 2.293-1.414-1.414L10.586 13l-2.293-2.293 1.414-1.414L12 11.586l2.293-2.293 1.414 1.414L13.414 13l2.293 2.293zM21 3h-2V1h-2v5h-1V3H8V1H6v5H5V3H3c-1.103 0-2 .898-2 2v15c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2z"
    />
  </svg>
);

export default SvgComponent;
