import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M11.998 3c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L.998 21h11c5.514 0 10-4.037 10-9s-4.486-9-10-9zm0 13.081s-4.579-3.33-4.579-5.797c0-2.344 3.562-3.36 4.579-.284 1.018-3.076 4.579-2.06 4.579.284 0 2.467-4.579 5.797-4.579 5.797z"
    />
  </svg>
);

export default SvgComponent;
