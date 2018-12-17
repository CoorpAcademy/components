import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M21 18.001H7a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-13-2h12v-12H8v12z"
      fill="currentColor"
    />
    <path d="M18 22.001H3a1 1 0 0 1-1-1v-15h2v14h14v2z" fill="currentColor" />
    <circle cx={11} cy={7.001} r={2} fill="currentColor" />
    <path fill="currentColor" d="M16 9.001l-2.588 3.882L12 11.001l-3 4h10z" />
  </svg>
);

export default SvgComponent;
