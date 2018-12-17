import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-1.414 1l5 5h-5v-5zm-7.375 18h-1.25v-1.875h-1.25v1.875h-1.25v-5h1.25v1.875h1.25v-1.875h1.25v5zM12 16.257h-1.25v3.75H9.5v-3.75H8.25v-1.25H12v1.25zm4.375 3.75h-1.25v-2.31l-.106.157c-.231.348-.808.348-1.04 0l-.104-.157v2.31h-1.25v-4.374a.626.626 0 0 1 1.144-.347l.731 1.094.729-1.095a.626.626 0 0 1 1.145.347v4.375zm3.749 0H17v-5h1.25v3.75h1.874v1.25z"
    />
  </svg>
);

export default SvgComponent;
