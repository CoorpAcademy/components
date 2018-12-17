import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 7.969h-2v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-6.13.602c-.07.488-.723 4.812-2.152 6.24a3.47 3.47 0 0 1-2.469 1.023 3.46 3.46 0 0 1-1.877-.553l-1.653 1.651-1.061-1.061 1.652-1.65a3.498 3.498 0 0 1 .471-4.348c1.176-1.177 5.38-1.994 6.211-2.146l1.024-.187-.146 1.031z"
    />
  </svg>
);

export default SvgComponent;
