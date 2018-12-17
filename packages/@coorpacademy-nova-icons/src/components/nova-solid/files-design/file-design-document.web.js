import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM6 5h5v2H6V5zm0 4h6v2H6V9zm0 4h4v2H6v-2zm3 7l4-6 4 6H9zm8-5a2 2 0 1 1-.001-4.001A2 2 0 0 1 17 15zm-2-8V2l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
