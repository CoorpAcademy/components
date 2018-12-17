import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.998 4.998c-.441 0-.831.29-.958.713l-.985 3.287h-4.057v-6a1 1 0 0 0-1-1h-1c-3.309 0-6 2.692-6 6 0 .316-.002 1.712.006 2.029a.989.989 0 0 0 .045.288l2 6a1 1 0 0 0 .949.683h8a1 1 0 0 0 .958-.712l2.786-9.288h3.256v-2h-4zm-12 3c0-.471.097-.917.248-1.337l2.338 2.337H4.998v-1zm4-.414l-2.6-2.601a3.968 3.968 0 0 1 2.6-.986v3.587zm4.256 7.414H6.719l-1.334-4h9.069l-1.2 4z" />
      <circle cx={6.998} cy={19.998} r={2} />
      <circle cx={12.998} cy={19.998} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
