import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.417 11.381h.005a.997.997 0 0 0 1.063-.92l.469-5.995c.018-.261.234-.464.53-.464h.003a.498.498 0 0 1 .465.52l-.469 5.985a.996.996 0 0 0 .929 1.075.983.983 0 0 1 .731.418h2.137a3.008 3.008 0 0 0-1.739-2.172l.404-5.161a2.47 2.47 0 0 0-.611-1.813 2.481 2.481 0 0 0-1.713-.847c-1.375-.089-2.571.962-2.662 2.314l-.405 5.167A3.006 3.006 0 0 0 8.387 12h2.052c.153-.362.514-.619.978-.619zM23 13h-7a1 1 0 0 0-.949.684L14.279 16H9.721l-.772-2.316A1 1 0 0 0 8 13H1a1 1 0 1 0 0 2h1.246l1.793 6.275A1 1 0 0 0 5 22h14a1 1 0 0 0 .961-.725L21.754 15H23a1 1 0 1 0 0-2zm-4.754 7H5.754l-1.429-5h2.954l.772 2.316A1 1 0 0 0 9 18h6a1 1 0 0 0 .949-.684L16.721 15h2.954l-1.429 5z" />
    </g>
  </svg>
);

export default SvgComponent;
