import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M22.707 6.707l-1.414-1.414L16.586 10H4a.999.999 0 0 0-.857 1.514l1.926 3.21A2.978 2.978 0 0 0 4 17c0 1.654 1.346 3 3 3s3-1.346 3-3h2.649l4.726 3.781A1.001 1.001 0 0 0 19 20v-9.586l3.707-3.707zM7 18c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm2.22-3c-.55-.609-1.337-1-2.22-1-.011 0-.021.004-.032.004L5.766 12h9.82l-3 3H9.22zm5.277.917L17 13.414v4.506l-2.503-2.003z" />
      <path d="M5 7h4v2H5zM11 7h4v2h-4zM8 4h4v2H8z" />
    </g>
  </svg>
);

export default SvgComponent;
