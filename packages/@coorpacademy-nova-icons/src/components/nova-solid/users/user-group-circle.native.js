import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.001 4.999c.825 0 1.5.676 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.676-1.5-1.5.675-1.5 1.5-1.5M19.001 15h-4v-4a2 2 0 0 1 4 0v4zM12.001 3c.825 0 1.5.676 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.676-1.5-1.5.675-1.5 1.5-1.5M14.001 13h-4V9a2 2 0 0 1 4 0v4zM7.001 4.999c.825 0 1.5.676 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.676-1.5-1.5.675-1.5 1.5-1.5M9.001 15h-4v-4a2 2 0 0 1 4 0v4zM12.001 16c-6.075 0-11 1.343-11 3s4.925 3 11 3c6.074 0 11-1.343 11-3s-4.926-3-11-3" />
    </G>
  </Svg>
);

export default SvgComponent;
