import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.581 7.188l-7-5a.997.997 0 0 0-1.162 0l-7 5A.997.997 0 0 0 4 8.001v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-10a.997.997 0 0 0-.419-.813zM15 15.001l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2 1 3zM4 20.001h16v2H4z"
    />
  </svg>
);

export default SvgComponent;
