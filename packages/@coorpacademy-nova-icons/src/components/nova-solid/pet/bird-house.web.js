import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M12 3.779L1.427 11.181l1.146 1.638L12 6.221l9.427 6.598 1.146-1.638z" />
      <path d="M17.494 12.662l-4.939-3.293a1.003 1.003 0 0 0-1.109 0l-4.939 3.293c-.311.207-.48.572-.439.944l.834 7.504c.055.507.484.89.993.89H11v2h2v-2h3.105a1 1 0 0 0 .994-.89l.834-7.504a1.002 1.002 0 0 0-.439-.944zM12 18a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 18z" />
    </g>
  </svg>
);

export default SvgComponent;
