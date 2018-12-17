import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a1.002 1.002 0 0 0-1.211-.502l-4.757 1.586A.998.998 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4A.999.999 0 0 0 20 17zM2 22v-6h2v6H2zm14.5-1H6v-4.279l4.494-1.497.29.579-1.49 1.49A1 1 0 0 0 10 19h8l-1.5 2zM8.03 9.692a3.418 3.418 0 0 0 4.484-5.166c-1.325-1.15-5.56-1.558-7.167-1.737.216 1.001 1.046 5.482 2.683 6.903zm3.173-3.656c.592.515.655 1.413.142 2.006-.492.568-1.434.635-2.004.141-.479-.417-1.006-1.767-1.384-3.05 1.486.246 2.898.601 3.246.903zM15.729 3.144a3.78 3.78 0 0 0-1.078 2.702c.007.513.115 1.007.313 1.463-.649.932-.964 1.925-.964 2.761V14h2v-3.93c0-.342.11-.736.314-1.139a3.778 3.778 0 0 0 2.137.665 3.774 3.774 0 0 0 2.724-1.15c1.378-1.416 2.133-6.28 2.402-7.867-1 .155-6.15.821-7.848 2.565zm4.013 3.907a1.784 1.784 0 0 1-2.096.347 5.28 5.28 0 0 1 .8-.503l-.895-1.789a7.637 7.637 0 0 0-.885.522 1.78 1.78 0 0 1 .494-1.088c.56-.575 2.334-1.137 3.935-1.497-.391 1.804-.933 3.576-1.353 4.008z" />
    </g>
  </svg>
);

export default SvgComponent;
