import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 4.998l-6 8h4v6l6-8h-4z" />
      <Path d="M12 1.998c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.588-8-8 0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
