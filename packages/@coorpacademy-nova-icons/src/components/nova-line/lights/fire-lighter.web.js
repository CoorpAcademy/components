import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M19 11h-8V3a1 1 0 0 0-1-1H6c-1.104 0-2 .898-2 2v7c0 1.103.896 2 2 2h3v7c0 1.103.896 2 2 2h7c1.104 0 2-.897 2-2v-8a1 1 0 0 0-1-1zm-1 2v1h-7v-1h7zM6 4h3v7H6V4zm5 16v-4h7v4h-7z" />
      <path d="M16 10c1.654 0 3-1.346 3-3 0-1.277-1.522-3.62-2.178-4.568-.373-.541-1.271-.541-1.645 0C14.522 3.38 13 5.723 13 7c0 1.654 1.346 3 3 3zm0-5.146c.576.97.992 1.841 1 2.146a1 1 0 0 1-2 .001c.008-.306.424-1.177 1-2.147z" />
    </g>
  </svg>
);

export default SvgComponent;
