import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M12 9.001c-1.103 0-2 .896-2 2h4c0-1.104-.897-2-2-2z"
      fill="currentColor"
    />
    <path
      d="M12 6.001c2.757 0 5 2.243 5 5h2c0-3.859-3.14-7-7-7s-7 3.141-7 7h2c0-2.757 2.243-5 5-5zM20 21.001H4c-1.103 0-2-.897-2-2v-4c0-1.104.897-2 2-2h16c1.103 0 2 .896 2 2v4c0 1.103-.897 2-2 2zm-16-6v4h16.001l-.001-4H4z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M14 16.001h4v2h-4z" />
    <circle cx={7} cy={17.001} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
