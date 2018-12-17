import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 10.37c-.551 0-1 .449-1 1V13h2v-1.63c0-.552-.449-1-1-1z" />
      <Path d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-2 16H8v-5h1v-1.63c0-1.654 1.346-3 3-3s3 1.346 3 3V13h1v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
