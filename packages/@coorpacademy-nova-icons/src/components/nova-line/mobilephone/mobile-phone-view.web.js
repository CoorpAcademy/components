import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.004h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 17.999H2v-2h7v-2H2v-8h8v3h2v-7c0-1.104-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h7v-2zm-7-16h8v2H2v-2zM23.414 21.999l-3.247-3.247c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.966 4.966 0 0 0 2.753-.833L22 23.413l1.414-1.414zm-10.414-6c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
