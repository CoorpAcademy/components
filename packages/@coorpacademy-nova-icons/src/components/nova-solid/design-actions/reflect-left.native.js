import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 13h4v-2h-4V8l-5 4 5 4zM2 11h2v2H2zM2 8h2v2H2zM2 5h2v2H2zM8 2h2v2H8zM5 2h2v2H5zM2 2h2v2H2zM2 14h2v2H2zM2 17h2v2H2zM2 20h2v2H2zM5 20h2v2H5zM8 20h2v2H8z" />
      <Path d="M11 2v5h2V4h7v16h-7v-2h-2v4h11V2z" />
    </G>
  </Svg>
);

export default SvgComponent;
