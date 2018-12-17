import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 16.059c-2.393 0-3.419-1.512-3.456-1.567-.342-.543-1.209-.601-1.619-.107-.014.016-1.422 1.674-3.852 1.674-2.504 0-3.762-1.576-3.81-1.637-.377-.5-1.226-.494-1.605.005-.049.065-1.239 1.597-3.653 1.597a1 1 0 0 0-1 .998L2 21a1.002 1.002 0 0 0 1 1.002h18a1 1 0 0 0 1-1v-3.943a1 1 0 0 0-1-1z" />
      <Path d="M16.707 9.709l-1.414-1.414L13 10.588V5.002h-2v5.586L8.707 8.295 7.293 9.709 12 14.416zM11 2.002h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
