import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 0C4.038 0 0 4.038 0 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm2.445 11.832L8 9.535V4h2v4.465l2.555 1.703-1.11 1.664zM23.708 17.706l-1.414-1.413-2.293 2.293-2.293-2.293-1.414 1.413L18.587 20l-2.293 2.293 1.414 1.413 2.293-2.292 2.293 2.292 1.414-1.413L21.415 20z" />
    </g>
  </svg>
);

export default SvgComponent;
