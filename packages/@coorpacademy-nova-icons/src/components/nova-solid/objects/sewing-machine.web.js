import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <path
      fill="currentColor"
      d="M18 2H7a5.007 5.007 0 0 0-5 5.001V11a1 1 0 0 0 1 1h2v4h2v-1h1v-2H7v-1h2a.998.998 0 0 0 .894-.553L10.618 10H12v7H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.001c0-2.205-1.794-4-4-4.001zm-1 15a2 2 0 1 1 .001-4.001A2 2 0 0 1 17 17zm2-10h-8V5h8v2z"
    />
  </svg>
);

export default SvgComponent;
