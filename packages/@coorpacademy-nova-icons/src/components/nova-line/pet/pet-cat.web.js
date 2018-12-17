import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      d="M22 7c0-2.757-2.243-5-5-5v2c1.654 0 3 1.346 3 3s-1.346 3-3 3h-4.515c-2.223 0-3.313-1.125-5.949-3.841C5.991 5.596 3 2.586 3 2.586v4.123c-.476.748-2 2.994-2 3.877 0 2.105 1.777 2.329 2.839 2.463.492.063 1 .126 1.482.29.406.139.679.519.679.946V19h2v-3h9v3h2v-7.424A5.002 5.002 0 0 0 22 7zm-5 7H7.986a3.004 3.004 0 0 0-2.02-2.555c-.676-.229-1.314-.311-1.877-.381-.375-.047-.943-.119-1.054-.217-.178-.332 1.7-3.143 1.903-3.465C7.792 10.314 9.326 12 12.485 12H17v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
