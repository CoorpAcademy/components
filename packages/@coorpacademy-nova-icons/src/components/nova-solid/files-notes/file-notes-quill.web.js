import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-3.905 13.133c-1.498 1.498-2.757 1.679-3.583 1.356L9 18H7l2.512-2.512c-.284-.725-.178-1.782.863-3.043L12 14.071v-3.054C14.092 9.674 17 9 17 9s-.968 4.195-2.905 6.133z"
    />
  </svg>
);

export default SvgComponent;
