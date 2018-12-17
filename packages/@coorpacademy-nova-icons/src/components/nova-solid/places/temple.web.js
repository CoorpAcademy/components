import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21.228 17.684a1 1 0 0 0-.949-.684H19v-7h-2v7h-2v-7h-2v7h-2v-7H9v7H7v-7H5v7H3.721c-.43 0-.812.275-.949.684l-.334 1A1 1 0 0 0 3.388 20h17.225a1 1 0 0 0 .949-1.316l-.334-1zM19 7a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5H2v2h20V7h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
