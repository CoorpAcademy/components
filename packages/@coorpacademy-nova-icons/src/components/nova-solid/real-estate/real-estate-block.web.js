import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M10.715 18.7c.391.187.823.3 1.285.3 1.654 0 3-1.346 3-3 0-.461-.113-.894-.301-1.285L10.715 18.7zM13.285 13.301A2.965 2.965 0 0 0 12 13c-1.654 0-3 1.346-3 3 0 .462.113.895.301 1.286l3.984-3.985z" />
      <path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM12 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
    </g>
  </svg>
);

export default SvgComponent;
