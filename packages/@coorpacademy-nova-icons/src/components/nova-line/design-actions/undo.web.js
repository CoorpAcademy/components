import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.032 13h-2a8.945 8.945 0 0 0 1.943 4.98l1.426-1.426A6.957 6.957 0 0 1 5.032 13zM6.389 19.395A8.942 8.942 0 0 0 11 21.31v-2.02a6.975 6.975 0 0 1-3.185-1.321l-1.426 1.426zM16.527 4.604L19 2h-7v7.37l3.102-3.266C17.408 7.25 19 9.625 19 12.37c0 3.52-2.613 6.433-6 6.92v2.02c4.493-.5 8-4.316 8-8.94 0-3.311-1.803-6.203-4.473-7.766zM6.75 7.74l-1.5-1.323A8.983 8.983 0 0 0 3.112 11h2.027A6.988 6.988 0 0 1 6.75 7.74z" />
    </g>
  </svg>
);

export default SvgComponent;
