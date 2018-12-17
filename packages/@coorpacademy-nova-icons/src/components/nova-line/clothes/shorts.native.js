import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24H.001z" />
    <Path
      d="M20.998 4.929A1.001 1.001 0 0 0 20 4H4c-.524 0-.96.405-.998.929l-1 14A1.002 1.002 0 0 0 3 20h7a1 1 0 0 0 1-1v-4c0-.551.449-1 1-1s1 .449 1 1v4a1 1 0 0 0 1 1h7a1.001 1.001 0 0 0 .998-1.071l-1-14zM19.283 9l.136 1.904A1.997 1.997 0 0 1 18 9h1.283zM15 7V6h4.068l.072 1H15zm-4 0V6h2v1h-2zM9 6v1H4.859l.072-1H9zM6 9c0 .899-.601 1.653-1.419 1.904L4.717 9H6zm9 9v-3c0-1.654-1.346-3-3-3s-3 1.346-3 3v3H4.074l.36-5.044C6.434 12.736 8 11.057 8 9h8c0 2.057 1.566 3.736 3.565 3.956L19.926 18H15z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
