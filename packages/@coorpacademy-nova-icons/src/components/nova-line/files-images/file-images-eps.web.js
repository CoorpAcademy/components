import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.001h10v4h4v1h2V5.587l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.001H5v-1H3v1c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-1h-2v1zM8 18.001v-2H4v-1h3v-2H4v-1h4v-2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5zM9 10.001v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H9zm4 3a1 1 0 0 1-1 1h-1v-2h1a1 1 0 0 1 1 1zM18.5 12.001H22v-2h-3.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H16v2h3.5c1.379 0 2.5-1.122 2.5-2.5s-1.121-2.5-2.5-2.5h-1c-.275 0-.5-.225-.5-.5s.225-.5.5-.5z" />
    </g>
  </svg>
);

export default SvgComponent;
