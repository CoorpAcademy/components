import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M21 13h-4v-3a1 1 0 0 0-1-1h-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-1 4h-5v-2h5v2zM9 17v-2h4v2H9zm-5 0v-2h3v2H4zm5-6v2H4v-2h5zm2 2v-2h4v2h-4zm2-4H9V7h4v2zM4 7h3v2H4V7zm0 12h5v2H4v-2zm7 0h4v2h-4v-2zm9 2h-3v-2h3v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
