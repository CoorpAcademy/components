import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 18h-2v5h5v-2h-3z" />
      <Path d="M21 10.486c0-3.592-1.59-6.967-4.363-9.256l-1.273 1.542A9.974 9.974 0 0 1 19 10.486a9.963 9.963 0 0 1-2 5.99V15h-2v5h5v-2h-1.656A11.95 11.95 0 0 0 21 10.486z" />
      <Path d="M16 12V9a1 1 0 0 0-1-1H9V7a1 1 0 0 0-1.447-.894l-4 2A.998.998 0 0 0 3 9v6a1 1 0 0 0 1 1h5a1 1 0 0 0 .949-.684L10.721 13H15a1 1 0 0 0 1-1zm-2-1h-4a1 1 0 0 0-.949.684L8.279 14H5V9.619l2-1V9a1 1 0 0 0 1 1h6v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
