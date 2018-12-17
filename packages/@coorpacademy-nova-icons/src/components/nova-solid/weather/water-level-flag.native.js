import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.993 8.005H15l1 1h3v-5h-3l-1-1h-4.007v10h2z" />
      <Path d="M21 15.061c-2.393 0-3.419-1.513-3.456-1.567-.341-.543-1.209-.6-1.619-.107-.014.017-1.422 1.675-3.852 1.675-2.504 0-3.762-1.576-3.81-1.637-.377-.5-1.226-.494-1.605.005-.049.064-1.239 1.597-3.653 1.597a1 1 0 0 0-1 .998L2 20.003a.998.998 0 0 0 1 1.002h18a1 1 0 0 0 1-1v-3.943c0-.552-.448-1.001-1-1.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
