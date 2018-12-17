import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 11h-7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h4c.266 0 .52.105.707.293l3 3A.996.996 0 0 1 21 4v6a1 1 0 0 1-1 1zm-6-2h5V4.414L16.586 2H14v7zM20 24h-7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h4c.266 0 .52.105.707.293l3 3A.996.996 0 0 1 21 17v6a1 1 0 0 1-1 1zm-6-2h5v-4.586L16.586 15H14v7z"
      fill="currentColor"
    />
    <circle cx={1} cy={1} r={1} fill="currentColor" />
    <circle cx={1} cy={5} r={1} fill="currentColor" />
    <circle cx={1} cy={9} r={1} fill="currentColor" />
    <circle cx={1} cy={13} r={1} fill="currentColor" />
    <circle cx={1} cy={17} r={1} fill="currentColor" />
    <circle cx={5} cy={17} r={1} fill="currentColor" />
    <circle cx={9} cy={17} r={1} fill="currentColor" />
    <circle cx={9} cy={5} r={1} fill="currentColor" />
    <circle cx={5} cy={5} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
