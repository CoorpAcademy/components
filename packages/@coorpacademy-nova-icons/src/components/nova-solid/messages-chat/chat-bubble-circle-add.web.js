import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.998 13a6 6 0 0 1-6-6c0-.322.033-.637.082-.945A11.359 11.359 0 0 0 10.998 6c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9 0-.899-.151-1.767-.425-2.587a5.97 5.97 0 0 1-2.575.587z" />
      <path d="M21.998 6h-3V3h-2v3h-3v2h3v3h2V8h3z" />
    </g>
  </svg>
);

export default SvgComponent;
