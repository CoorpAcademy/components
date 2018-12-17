import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zM8 18l1.027-3.215 2.121 2.122L8 18zm8.452-6.398l-3.889 3.89-2.122-2.121 3.889-3.889a1.5 1.5 0 0 1 2.122 2.12z"
    />
  </svg>
);

export default SvgComponent;
