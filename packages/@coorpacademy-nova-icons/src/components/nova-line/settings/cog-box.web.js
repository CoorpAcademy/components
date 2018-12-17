import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M19 21H5c-1.104 0-2-.897-2-2V5c0-1.102.896-2 2-2h14c1.104 0 2 .898 2 2v14c0 1.102-.896 2-2 2zM5 5v14h14.002L19 5H5z"
      fill="currentColor"
    />
    <path
      d="M18 13v-2h-2.143a3.947 3.947 0 0 0-.424-1.019l1.516-1.516-1.414-1.415-1.515 1.516A3.983 3.983 0 0 0 13 8.142V6h-2v2.142a3.985 3.985 0 0 0-1.02.425L8.465 7.05 7.051 8.464 8.566 9.98c-.185.316-.33.656-.423 1.02H6v2h2.143c.094.363.238.704.424 1.019l-1.516 1.517 1.414 1.414 1.516-1.516c.316.186.656.33 1.02.425V18h2v-2.142a4.021 4.021 0 0 0 1.02-.425l1.516 1.516 1.414-1.414-1.516-1.517c.186-.315.33-.655.424-1.019H18zm-6 1c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2s2 .898 2 2c0 1.102-.896 2-2 2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
