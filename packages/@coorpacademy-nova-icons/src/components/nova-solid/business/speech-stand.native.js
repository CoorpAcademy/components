import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.919 15.608l-3-8A.999.999 0 0 0 18 7.002H9v-2h2.279c.348.594.986 1 1.721 1 1.1 0 2-.9 2-2s-.9-2-2-2c-.734 0-1.373.405-1.721 1H8a1 1 0 0 0-1 1v3H6c-.4 0-.762.238-.919.606l-3 8A.997.997 0 0 0 3 17.002h8v3H8v2h8v-2h-3v-3h8a1 1 0 0 0 .919-1.394zM7 15.002l2-6h6l2 6H7z"
    />
  </Svg>
);

export default SvgComponent;
