import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 9V7h-2V6c0-1.104-.897-2-2-2h-2c-.379 0-.725.214-.895.553L13 8.764V8a1 1 0 0 0-1-1h-1.613l.562-1.684a.997.997 0 0 0-.138-.9A.998.998 0 0 0 10 4H6c-1.103 0-2 .896-2 2v1H2v2h2v2H2v2h2v2H2v2h2v1c0 1.103.897 2 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1c1.103 0 2-.897 2-2v-1h2v-2h-2v-2h2v-2h-2V9h2zM6 18V6h2.613l-.562 1.684a.996.996 0 0 0 .138.9c.188.262.49.416.811.416h2v4a1 1 0 0 0 1.895.448L16.618 6H18l.001 12H6z" />
      <path d="M13 15h3v2h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
