import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm3 12h-2v3h-2v-3H9v-2h1.882L9.106 8.451l1.789-.895L12 9.768l1.106-2.212 1.789.895-1.776 3.552H15v2z"
    />
  </svg>
);

export default SvgComponent;
