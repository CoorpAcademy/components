import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 4v5.535l3.446 2.297 1.109-1.664L10 8.465V4z" />
      <Path d="M17.941 10c.037-.329.059-.662.059-1 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a8.956 8.956 0 0 0 5-1.521V13.89A6.975 6.975 0 0 1 9 16c-3.86 0-7-3.14-7-7s3.14-7 7-7c3.859 0 7 3.14 7 7 0 .341-.033.673-.08 1h2.021zM21 17h-2c-.551 0-1-.449-1-1 0-.551.449-1 1-1h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .449 1 1 0 .551-.449 1-1 1h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
