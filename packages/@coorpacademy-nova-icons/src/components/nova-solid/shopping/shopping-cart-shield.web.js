import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9h-4.415c-1.267 3.498-5.545 5.396-6.522 5.786L6 15.231l-.803-.321.833 3.332A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775l2.821-12.226H24v-2h-4z" />
      <path d="M6 13.019l.196-.039C8.203 12.579 12 10.812 12 7V0H0v7c0 3.812 3.797 5.579 5.804 5.981l.196.038zM3 7V5h2V3h2v2h2v2H7v2H5V7H3z" />
    </g>
  </svg>
);

export default SvgComponent;
