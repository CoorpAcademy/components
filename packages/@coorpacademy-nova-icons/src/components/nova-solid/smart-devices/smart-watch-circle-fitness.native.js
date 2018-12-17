import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 11.001h-4v-1H8v4h2v-1h4v1h2v-4h-2z" />
      <Path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
