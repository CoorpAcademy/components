import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <path
      fill="currentColor"
      d="M3 3.001h5v2H3zM3 9.001h5v2H3zM3 15.001h5v2H3z"
    />
    <circle cx={13} cy={4.001} r={1} fill="currentColor" />
    <circle cx={16} cy={4.001} r={1} fill="currentColor" />
    <circle cx={13} cy={10.001} r={1} fill="currentColor" />
    <circle cx={16} cy={10.001} r={1} fill="currentColor" />
    <circle cx={13} cy={16.001} r={1} fill="currentColor" />
    <circle cx={16} cy={16.001} r={1} fill="currentColor" />
    <path
      d="M18 18.001l-.003-.006v.006H2v-4h15.998v.004l.002-.004v-2h2v-10a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h16v-2zm-16-16h16l-.001 4H2v-4zm0 6h15.999l-.001 4H2v-4zM20 14.001h2v6h-2z"
      fill="currentColor"
    />
    <circle cx={21} cy={22.001} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
