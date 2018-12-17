import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 0h-9c-.265 0-.52.106-.707.293L12 1.586 10.707.293A1.002 1.002 0 0 0 10 0H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4v-2H2V2h7.586L11 3.414V5h2V3.414L14.414 2H22v15h2V1a1 1 0 0 0-1-1z" />
      <path d="M21 15c0-3.859-3.14-7-7-7s-7 3.141-7 7c0 3.86 3.14 7 7 7a6.962 6.962 0 0 0 4.73-1.855l3.27 3.27L23.414 22 20 18.587A6.944 6.944 0 0 0 21 15zm-7 5c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <path d="M16.25 12h-4.5a.75.75 0 0 0-.75.75V15h1.5v-1.5h.75v3h-1.5V18h4.5v-1.5h-1.5v-3h.75V15H17v-2.25a.75.75 0 0 0-.75-.75zM16 3h4v2h-4zM4 3h4v2H4zM4 7h4v2H4zM4 11h2v2H4zM18 6h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
