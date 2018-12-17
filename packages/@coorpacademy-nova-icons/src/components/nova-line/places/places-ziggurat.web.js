import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M22.789 17.385L16 8.655V3.999a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4.656l-6.79 8.729c-.136.177-.21.392-.21.615v3a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3c0-.223-.075-.438-.211-.614zM10 4.999h4v3h-1v-2h-2v2h-1v-3zm11 15H3v-1.657l6.489-8.343h5.021L21 18.342v1.657z" />
      <path d="M5 16.999h14v2H5zM8 13.999h8v2H8zM10 10.999h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
