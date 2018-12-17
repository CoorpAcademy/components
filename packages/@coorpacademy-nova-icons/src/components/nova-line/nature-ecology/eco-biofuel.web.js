import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 10h13V8h-1V5a1 1 0 0 0-1-1H9V2H6v2H5a1 1 0 0 0-1 1v3H3v2h1v5H3v2h1v4a1 1 0 0 0 1 1h7v-2H6v-3h6v-2H6v-5zm0-4h10v2H6V6z" />
      <path d="M21.824 10.734l-.126-1.035-.941.447c-.919.438-5.558 2.706-6.542 4.416a4.06 4.06 0 0 0-.404 3.1c.219.813.676 1.52 1.307 2.051l-1.172 1.997 1.294.76 1.184-2.017c.427.148.874.232 1.327.232a4.097 4.097 0 0 0 3.541-2.046c1.198-2.082.604-7.315.532-7.905zm-1.833 7.157c-.548.953-1.717 1.42-2.777 1.215l1.6-2.726-1.294-.76-1.622 2.763a2.568 2.568 0 0 1-.64-1.11 2.567 2.567 0 0 1 .256-1.961c.496-.861 2.982-2.336 4.925-3.334.162 2.071.157 4.863-.448 5.913z" />
    </g>
  </svg>
);

export default SvgComponent;
