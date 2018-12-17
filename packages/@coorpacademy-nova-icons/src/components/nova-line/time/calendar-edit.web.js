import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 3h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h7v-2H2V8h16v1h2V5c0-1.102-.897-2-2-2zM20.707 11.293a1 1 0 0 0-1.414 0l-7 7a1.015 1.015 0 0 0-.263.465l-1 4a1.002 1.002 0 0 0 1.213 1.213l4-1c.176-.044.336-.136.465-.263l7-7a1 1 0 0 0 0-1.414l-3.001-3.001zm-5.219 9.804l-2.114.529.53-2.114L17 16.415 18.585 18l-3.097 3.097zM20 16.587L18.414 15 20 13.415 21.586 15 20 16.587z" />
    </g>
  </svg>
);

export default SvgComponent;
