import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M18.82 19l-1-5h-3.425a5.524 5.524 0 0 0-1.738-2H17v-2h-6V8.316A2.992 2.992 0 0 0 13 5.5a3 3 0 0 0-6 0c0 1.304.838 2.403 2 2.816v2.71A5.497 5.497 0 0 0 4 16.5a5.5 5.5 0 0 0 11 0c0-.169-.01-.335-.025-.5h1.206l1 5H20v-2h-1.18zM9.5 20a3.5 3.5 0 1 1 0-7.002A3.5 3.5 0 0 1 9.5 20z"
    />
  </svg>
);

export default SvgComponent;
