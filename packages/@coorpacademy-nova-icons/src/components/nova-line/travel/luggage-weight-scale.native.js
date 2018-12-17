import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M13.255 3.098l1.49 1.334-2.668 2.98-1.49-1.334z" />
      <Path d="M12 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zM17 16h-2v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-6-1h2v1h-2v-1zm5 7H8v-4h8v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
