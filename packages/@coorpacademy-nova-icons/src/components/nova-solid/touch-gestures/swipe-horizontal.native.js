import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.5 7.005a3.5 3.5 0 0 0-3.5 3.5v11.5h7v-11.5a3.5 3.5 0 0 0-3.5-3.5zm1.5 5h-3v-1.5a1.5 1.5 0 1 1 3 0v1.5zM23 10.005l-3-3v2h-3v2h3v2zM5 7.005l-3 3 3 3v-2h3v-2H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
