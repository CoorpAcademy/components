import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16.92 12.715A3.973 3.973 0 0 0 18 10c0-1.858-1.279-3.41-3-3.858V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.142c-1.721.448-3 2-3 3.858 0 1.051.416 2 1.08 2.715A2.983 2.983 0 0 0 6 15c0 .771.301 1.469.78 2A2.98 2.98 0 0 0 6 19c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3a2.98 2.98 0 0 0-.78-2c.479-.531.78-1.229.78-2 0-.92-.426-1.734-1.08-2.285zM8 15c0-.551.449-1 1-1h6c.551 0 1 .449 1 1 0 .551-.449 1-1 1H9c-.551 0-1-.449-1-1zm3-11h2v2h-2V4zm-1 4h4a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4zm5 12H9c-.551 0-1-.449-1-1 0-.551.449-1 1-1h6c.551 0 1 .449 1 1 0 .551-.449 1-1 1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
