import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24h-24z" />
    <g fill="currentColor">
      <path d="M15.999 19.998a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1h-5v1zM2.999 19.998a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1h-5v1zM1.999 14.094v2.904a1 1 0 0 0 1 1h8.007c-.677-.704-1.862-2.032-2.525-3.315l-6.482-.589zM15.518 14.683c-.663 1.283-1.849 2.611-2.525 3.315H21a1 1 0 0 0 1-1v-2.904l-6.482.589zM13.499 11.584a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0-3 0c0 1.5 3 4.5 3 4.5s3-3 3-4.5a1.5 1.5 0 0 0-1.5-1.5z" />
      <path d="M10.499 10.584c.562 0 1.082.187 1.5.501a2.491 2.491 0 0 1 1.5-.501c1.225 0 2.242.887 2.455 2.051l5.638-.513-2.343-3.125h-14.5l-2.343 3.125 5.638.513a2.501 2.501 0 0 1 2.455-2.051zM19.802 7.998l1.752-1.168-1.109-1.665-1.934 1.291-.531-2.654a1 1 0 0 0-.98-.804H7a.998.998 0 0 0-.98.804l-.533 2.654-1.933-1.29-1.11 1.664 1.752 1.168h15.606z" />
    </g>
  </svg>
);

export default SvgComponent;
