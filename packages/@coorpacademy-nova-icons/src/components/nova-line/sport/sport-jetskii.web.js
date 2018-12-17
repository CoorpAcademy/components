import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M4.721 10h16.217c-.135.482-.981.873-1.438 1.134l1 1.733C22.177 11.907 23 11.505 23 9a1 1 0 0 0-1-1h-.6L15 4h-4v2h4v2H4a1 1 0 0 0-.949.684l-1 3 1.897.633L4.721 10zM22 14h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H8c0 1.103-.897 2-2 2s-2-.897-2-2H2c0 1.103-.897 2-2 2v2c1.2 0 2.266-.542 3-1.383C3.734 17.458 4.8 18 6 18s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383A3.973 3.973 0 0 0 24 18v-2c-1.103 0-2-.897-2-2zM22 19h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H8c0 1.103-.897 2-2 2s-2-.897-2-2H2c0 1.103-.897 2-2 2v2c1.2 0 2.266-.542 3-1.383C3.734 22.458 4.8 23 6 23s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383A3.973 3.973 0 0 0 24 23v-2c-1.103 0-2-.897-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
