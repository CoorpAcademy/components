import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21.527 5.126l-9-5a1 1 0 0 0-.972 0l-9 5A1 1 0 0 0 2.042 6c0 .694.114 17 10 17s10-16.306 10-17a1 1 0 0 0-.515-.874zm-9.147 11.69L7.292 13l1.5-2 2.911 2.184 4.279-6.846 2.12 1.325-5.722 9.153z"
    />
  </svg>
);

export default SvgComponent;
