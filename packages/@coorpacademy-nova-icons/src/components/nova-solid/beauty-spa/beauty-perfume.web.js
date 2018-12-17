import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M19.5 4.333c-1.468 0-2.721.69-3.24 1.667H13a1 1 0 0 0-1 1v2h2V8h2.26c.52.977 1.772 1.667 3.24 1.667C21.433 9.667 23 8.473 23 7c0-1.473-1.567-2.667-3.5-2.667z" />
      <circle cx={8} cy={8} r={1} />
      <circle cx={5.5} cy={6} r={1} />
      <circle cx={5.5} cy={10} r={1} />
      <circle cx={3} cy={8} r={1} />
      <circle cx={3} cy={4} r={1} />
      <circle cx={3} cy={12} r={1} />
      <path d="M15 11.263V10h-4v1.263c-3.449.888-6 4.011-6 7.737a7.93 7.93 0 0 0 .779 3.431c.166.347.517.569.903.569h12.637c.385 0 .737-.222.903-.569A7.944 7.944 0 0 0 21 19c0-3.726-2.551-6.849-6-7.737zM17 20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2z" />
    </g>
  </svg>
);

export default SvgComponent;
