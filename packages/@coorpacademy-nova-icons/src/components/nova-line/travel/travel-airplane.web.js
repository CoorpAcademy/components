import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M15.88 10.478l-2.349 1.045-2.78-1.761-1.347.696c.135.088 2.549 1.695 2.709 1.695l-2.036.906-1.759-.786-1.326.763 3.349 1.68 1.841-.85-1.275 3.31 1.505-.782 1.834-3.351 2.288-1.008a.848.848 0 0 0 .432-1.122.847.847 0 0 0-1.086-.435z" />
      <path d="M18 5H6c-1.103 0-2 .896-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V7c0-1.104-.897-2-2-2zM6 19V7h12l.001 12H6z" />
    </g>
  </svg>
);

export default SvgComponent;
