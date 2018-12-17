import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.001h24v24.001h-24z" />
    <path
      d="M21 10.001h-.231A9.025 9.025 0 0 0 14 3.232v-.231a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.231a9.02 9.02 0 0 0-6.768 6.769H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.232A9.022 9.022 0 0 0 10 20.77v.231a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.231a9.023 9.023 0 0 0 6.769-6.769H21a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-2.294 0h-3.262A3.995 3.995 0 0 0 14 8.558V5.296a7.027 7.027 0 0 1 4.706 4.705zm-6.706 4c-1.104 0-2-.897-2-2s.896-2 2-2 2 .897 2 2-.896 2-2 2zm-2-8.705v3.262a4 4 0 0 0-1.443 1.443H5.295A7.028 7.028 0 0 1 10 5.296zm-4.705 8.705h3.262c.35.601.845 1.095 1.443 1.443v3.262a7.024 7.024 0 0 1-4.705-4.705zM14 18.706v-3.262a3.977 3.977 0 0 0 1.443-1.443h3.262A7.02 7.02 0 0 1 14 18.706z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
