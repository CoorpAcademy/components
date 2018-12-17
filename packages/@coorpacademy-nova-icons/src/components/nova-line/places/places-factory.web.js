import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21.178 14.015L11 12.165V8.999c0-.4-.238-.761-.606-.917L6 6.197V2.999H4V5.34l-.606-.258A.999.999 0 0 0 2 5.999v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5c0-.483-.346-.897-.822-.984zM20 18.999H8v-3H5v3H4V7.516l5 2.143v3.34a1 1 0 0 0 .821.984L20 15.833v3.166z" />
      <path d="M6.5 10.999a1.5 1.5 0 1 0 .001 2.999 1.5 1.5 0 0 0-.001-2.999zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM11 15.999h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
