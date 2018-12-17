import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path fill="currentColor" d="M18 22.001H3a1 1 0 0 1-1-1v-15h2v14h14v2z" />
    <path
      fill="currentColor"
      d="M21 2.001H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1zm-4.553 6.342L15 7.62v4.381a2.25 2.25 0 1 1-2.25-2.25c.086 0 .167.016.25.025V6.001a.998.998 0 0 1 1.448-.894l2.895 1.447-.896 1.789z"
    />
  </svg>
);

export default SvgComponent;
