import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M12 2a9.9 9.9 0 0 0-4.361 1.016A3.98 3.98 0 0 1 8.763 4.69C9.753 4.25 10.848 4 12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8c0-.717.104-1.41.282-2.072a3.975 3.975 0 0 1-1.838-.875A9.973 9.973 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10S17.514 2 12 2z" />
      <Circle cx={5} cy={6} r={2} />
      <Path d="M11 8.529V6.09A5.996 5.996 0 0 0 12 18a6 6 0 0 0 6-6 5.992 5.992 0 0 0-3-5.19V8h-2v2l1.883 1.471-1.766.588L11.941 15 9 13.236v-3.53l2-1.177z" />
    </G>
  </Svg>
);

export default SvgComponent;
