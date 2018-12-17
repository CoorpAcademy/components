import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M12.374 13.138l-2.527 6.56 2.981-1.549 3.637-6.642 4.533-1.998c.412-.178.73-.514.892-.932a1.678 1.678 0 0 0-2.187-2.158l-4.655 2.073L9.535 5 6.868 6.381c.265.172 5.053 3.36 5.369 3.36l-4.034 1.796-3.486-1.56-2.629 1.516 6.638 3.328 3.648-1.683zM2 21h20v2H2z" />
    </g>
  </svg>
);

export default SvgComponent;
