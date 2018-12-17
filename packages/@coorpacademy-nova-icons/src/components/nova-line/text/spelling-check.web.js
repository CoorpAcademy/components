import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 12V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3h2v-2h3v6.92c.328.047.66.08 1 .08s.672-.033 1-.08V10h3v2h2zM11 20.949c-.33.03-.663.051-1 .051s-.67-.021-1-.051V22H7v2h6v-2h-2v-1.051z" />
      <path d="M22.707 22.293l-5.442-5.441A9.956 9.956 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10c0 5.515 4.486 10 10 10a9.937 9.937 0 0 0 5.752-1.833l5.541 5.54 1.414-1.414zM2 10c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8z" />
    </g>
  </svg>
);

export default SvgComponent;
