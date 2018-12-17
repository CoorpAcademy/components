import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M20 20.764V11h1V9h-1V8c0-4.411-3.589-8-8-8S4 3.589 4 8v1H3v2h1v9.764L2.382 24h2.236l1-2h12.764l1 2h2.236L20 20.764zM18 20H6v-4.726C7.467 16.941 9.61 18 12 18s4.533-1.059 6-2.726V20zm0-10c0 3.309-2.691 6-6 6s-6-2.691-6-6V8c0-3.309 2.691-6 6-6s6 2.691 6 6v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
