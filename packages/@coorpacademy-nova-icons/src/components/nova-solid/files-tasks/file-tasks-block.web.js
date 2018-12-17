import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4zM12 13c-1.654 0-3 1.346-3 3 0 .462.113.895.301 1.286l3.984-3.985A2.965 2.965 0 0 0 12 13zM10.715 18.7c.391.187.823.3 1.285.3 1.654 0 3-1.346 3-3 0-.461-.113-.894-.301-1.286L10.715 18.7z" />
      <path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-7 16c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
    </g>
  </svg>
);

export default SvgComponent;
