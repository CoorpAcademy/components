import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h17.999v2.994H22V2c0-1.103-.896-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <path d="M12 10.994v7c0 3.818 3.798 5.582 5.806 5.981l.194.038.195-.038c2.008-.4 5.805-2.164 5.805-5.981v-7H12zm10 7c0 2.77-3.159 3.759-4 3.974-.84-.214-4-1.204-4-3.974v-5h8v5z" />
      <path d="M17 19.994h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
