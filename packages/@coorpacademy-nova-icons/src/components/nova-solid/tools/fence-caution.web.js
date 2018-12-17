import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M14.586 6.999h-3.172l-8 8.001H4v7h2v-7h.586z" />
      <path d="M19 6.999V5.723c.596-.345 1-.982 1-1.723a2 2 0 0 0-4 0c0 .741.404 1.378 1 1.724v1.69L9.414 15h3.172l8-8H19zM15.414 15H18v7h2v-7h1a1 1 0 0 0 1-1V8.414L15.414 15zM7 6.999V5.723C7.596 5.378 8 4.741 8 4a2 2 0 0 0-4 0c0 .741.404 1.378 1 1.724V7H3a1 1 0 0 0-1 1v5.586L8.586 7H7z" />
    </g>
  </svg>
);

export default SvgComponent;
