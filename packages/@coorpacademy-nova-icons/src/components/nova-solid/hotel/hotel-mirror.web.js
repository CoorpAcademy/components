import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M19.382 24h2.236L20 20.764V11h1V9h-1V8c0-4.411-3.589-8-8-8S4 3.589 4 8v1H3v2h1v9.764L2.382 24h2.236l1-2h12.764l1 2zM7 8c0-2.757 2.243-5 5-5s5 2.243 5 5v2c0 2.757-2.243 5-5 5s-5-2.243-5-5V8zm5 10a7.976 7.976 0 0 0 6-2.726V20H6v-4.726A7.976 7.976 0 0 0 12 18z"
    />
  </svg>
);

export default SvgComponent;
