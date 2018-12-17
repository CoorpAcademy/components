import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 7c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4 0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4z" />
      <Path d="M18.646 5.535l-1.33 1.494A8.01 8.01 0 0 1 20 13.007a8.018 8.018 0 0 1-2.669 5.966l1.333 1.49A10.017 10.017 0 0 0 22 13.007c0-2.851-1.222-5.574-3.354-7.472zM4 13.007a8.01 8.01 0 0 1 2.684-5.978l-1.33-1.494A10.013 10.013 0 0 0 2 13.007c0 2.842 1.216 5.56 3.336 7.456l1.333-1.49A8.018 8.018 0 0 1 4 13.007zM11 10h2v3h-2z" />
      <Circle cx={12} cy={15} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
