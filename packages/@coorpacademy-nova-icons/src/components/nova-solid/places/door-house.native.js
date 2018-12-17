import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 20V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16h12zm-4-10h2v5h-2v-5zM3 21h18v2H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
