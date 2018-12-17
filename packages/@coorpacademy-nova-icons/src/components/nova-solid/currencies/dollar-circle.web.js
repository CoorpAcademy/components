import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10 5.515 0 10-4.485 10-10 0-5.514-4.485-10-10-10zm3 8h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.207-.86 2.217-2 2.449v1.051h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1a2.503 2.503 0 0 1-2.5-2.5c0-1.207.86-2.217 2-2.449V7.003h2v1h2v2z"
    />
  </svg>
);

export default SvgComponent;
