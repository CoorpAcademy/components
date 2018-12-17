import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5.555 22c.693 1.19 1.968 2 3.445 2s2.752-.81 3.445-2h-6.89zM18 21H0v-2.721l.684-.228A3.385 3.385 0 0 0 3 14.838V12c0-3.309 2.691-6 6-6v2c-2.205 0-4 1.794-4 4v2.838c0 1.648-.745 3.16-1.965 4.162h11.93A5.378 5.378 0 0 1 13 14.838V13h2v1.838c0 1.46.932 2.751 2.316 3.213l.684.228V21zM14.943 11.472l-3.707-3.708L12.65 6.35l2.293 2.293 4.293-4.293 1.414 1.414z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
