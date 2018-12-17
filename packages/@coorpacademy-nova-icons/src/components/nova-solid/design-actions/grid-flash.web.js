import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 16h4v4h-4zM4 16h4v4H4zM4 10h4v4H4z" />
      <path d="M16 13.975V22H2V8h9.025a5.454 5.454 0 0 1 .58-2H0v18h18V13.788a5.502 5.502 0 0 1-1.5.212c-.169 0-.335-.01-.5-.025z" />
      <path d="M10 10v4h4v-.606A5.504 5.504 0 0 1 11.212 10H10zM16 13l4-5h-3V4l-4 5h3z" />
    </g>
  </svg>
);

export default SvgComponent;
