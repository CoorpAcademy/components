import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 10c0-4.411 3.589-8 8-8V0C4.486 0 0 4.485 0 10a9.928 9.928 0 0 0 2.938 7.062L1 19h6v-6l-2.649 2.649A7.937 7.937 0 0 1 2 10zM23.707 22.293l-5.969-5.969A9.95 9.95 0 0 0 20 10a9.93 9.93 0 0 0-2.938-7.062L19 1h-6v6l2.649-2.649A7.939 7.939 0 0 1 18 10c0 4.411-3.589 8-8 8v2c2.398 0 4.6-.85 6.324-2.262l5.969 5.969 1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
