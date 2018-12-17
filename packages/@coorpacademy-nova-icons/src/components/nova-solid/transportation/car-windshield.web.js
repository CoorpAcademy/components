import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 4H3c-1.103 0-2 .897-2 2v12h6v-5.586l-1.293 1.292-1.414-1.413 3-3a.999.999 0 0 1 1.414 0l3 3-1.414 1.413L9 12.414V18h6v-5.586l-1.293 1.292-1.414-1.413 3-3a.999.999 0 0 1 1.414 0l3 3-1.414 1.413L17 12.414V18h6V6c0-1.103-.897-2-2-2z"
    />
  </svg>
);

export default SvgComponent;
