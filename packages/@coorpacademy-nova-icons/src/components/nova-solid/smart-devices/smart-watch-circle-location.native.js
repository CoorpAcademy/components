import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 8.001a2.5 2.5 0 0 0-2.5 2.5c0 2.5 2.5 5.5 2.5 5.5s2.5-3 2.5-5.5a2.5 2.5 0 0 0-2.5-2.5zm0 3.631a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      <Path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
