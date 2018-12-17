import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={7} cy={10.001} r={2} />
      <path d="M11 11.001L9.001 15H13z" />
      <path d="M7 13.001l-3 4h5.001V15L9 15.001z" />
      <path d="M2 2h10v4h4l.001 4.001H18V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h7v-2H2V2zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a.997.997 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1a.991.991 0 0 0 .464-.264l7-7a.999.999 0 0 0 0-1.414zm-8.218 6.804l-2.114.528.528-2.114L17 16.414 18.586 18l-3.097 3.097zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z" />
    </g>
  </svg>
);

export default SvgComponent;
