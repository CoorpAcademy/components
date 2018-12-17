import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2h2v3h-2zM19.364 4.221l1.414 1.414-2.122 2.122-1.414-1.414zM20 11h3v2h-3zM19.364 19.779l-2.122-2.122 1.414-1.414 2.122 2.122zM12 19h2v3h-2zM6.636 19.78l-1.413-1.414 2.121-2.122 1.414 1.413zM3 11h3v2H3zM6.635 4.222l2.122 2.122-1.414 1.414-2.122-2.122zM16.707 12.293l-3-3a.999.999 0 0 0-1.414 0l-3 3 1.414 1.414L12 12.414V17h2v-4.586l1.293 1.292 1.414-1.413z" />
      <path d="M13 6c-3.309 0-6 2.691-6 6 0 1.911.877 3.661 2.406 4.805l1.198-1.602A3.963 3.963 0 0 1 9 12c0-2.205 1.794-4 4-4s4 1.795 4 4a3.97 3.97 0 0 1-1.605 3.204l1.199 1.601A5.955 5.955 0 0 0 19 12c0-3.309-2.691-6-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
