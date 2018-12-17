import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M9 22h1a2 2 0 0 0 4 0h1v-2H9v2zM9.713 8.628a2.37 2.37 0 0 0 .648 3.284c1.052.704 2.581.396 3.283-.65.616-.921.798-3.459.783-5.385-1.925.836-4.232 2.03-4.714 2.751z" />
      <path d="M12 0C7.037 0 3 4.037 3 9c0 5 5.135 7.974 5.135 7.974.475.275.865.844.865 1.263V19h6v-.763c0-.419.39-.989.865-1.264C15.865 16.974 21 14 21 9c0-4.963-4.037-9-9-9zm2.891 12.096a3.845 3.845 0 0 1-4.695 1.411l-1.19 1.776-1.246-.836 1.186-1.77a3.873 3.873 0 0 1-.48-4.883C9.5 6.248 13.982 4.42 14.87 4.07l.969-.383.056 1.04c.029.557.253 5.49-1.004 7.369z" />
    </g>
  </svg>
);

export default SvgComponent;
