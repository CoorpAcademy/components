import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 12.002c-.551 0-1 .448-1 1v2H7v-2c0-2.757 2.243-5 5-5h3v-4H2v16h13v-8h-3z" />
      <Path d="M17 5.587l-1.414 1.414 2 2H12c-2.205 0-4 1.794-4 4v1h2v-1c0-1.102.896-2 2-2h5.586l-2 2L17 14.416l4.414-4.414L17 5.587z" />
    </G>
  </Svg>
);

export default SvgComponent;
