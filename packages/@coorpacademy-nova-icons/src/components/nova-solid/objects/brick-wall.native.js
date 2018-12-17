import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M7 16H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM14 16h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM22 16h-5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM5 15h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zM10 9h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zM12 11v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
