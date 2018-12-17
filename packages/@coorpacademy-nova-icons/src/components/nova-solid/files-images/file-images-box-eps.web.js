import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 10.751h-.875v1.75H12a.875.875 0 1 0 0-1.75z" />
      <path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.5 10.75H5.001v.875h2.624v1.75H5.001v.875H8.5v1.748H4.126a.874.874 0 0 1-.875-.875V9.875c0-.481.391-.875.875-.875H8.5v1.75zm3.5 3.5h-.875V16h-1.75V9.002H12a2.628 2.628 0 0 1 2.625 2.624A2.627 2.627 0 0 1 12 14.25zm8.749-3.499h-3.062a.44.44 0 0 0-.438.438c0 .24.197.437.438.437h.875a2.19 2.19 0 0 1 2.188 2.186A2.19 2.19 0 0 1 18.562 16H15.5v-1.75h3.062a.439.439 0 0 0 0-.876h-.875a2.189 2.189 0 0 1-2.187-2.186c0-1.207.98-2.187 2.187-2.187h3.062v1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
