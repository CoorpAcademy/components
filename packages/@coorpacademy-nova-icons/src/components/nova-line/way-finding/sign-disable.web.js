import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002h24v24.001h-24z" />
    <path
      d="M18.82 19l-1-5h-3.425a5.524 5.524 0 0 0-1.738-2H17v-2h-6V7.815A2.992 2.992 0 0 0 13 5c0-1.654-1.346-3-3-3S7 3.346 7 5c0 1.302.838 2.402 2 2.815v3.21a5.497 5.497 0 0 0-5 5.474 5.5 5.5 0 0 0 11 .001c0-.168-.01-.335-.025-.5h1.206l1 5H20v-2h-1.18zM10 4c.551 0 1 .449 1 1 0 .551-.449 1-1 1s-1-.449-1-1c0-.551.449-1 1-1zm-.5 16a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
