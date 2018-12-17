import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M12 .999c-4.962 0-9 4.039-9 9v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-12c0-4.962-4.038-9-9-9zm6.705 7H16V4.263a7.029 7.029 0 0 1 2.705 3.736zm.295 8h-3v-6h3v6zm-8 0v-6h3v6h-3zm3 2v3h-3v-3h3zm-5-2H5v-6h4v6zm5-12.705v4.705h-3v-4.92c.328-.047.66-.081 1-.081a6.996 6.996 0 0 1 2 .296zm-5 .392v4.313H5.294A7.016 7.016 0 0 1 9 3.686zM5 17.999h4v3H5v-3zm11 3v-3h3v3h-3z" />
      <circle cx={7} cy={12.999} r={1.25} />
    </g>
  </svg>
);

export default SvgComponent;
