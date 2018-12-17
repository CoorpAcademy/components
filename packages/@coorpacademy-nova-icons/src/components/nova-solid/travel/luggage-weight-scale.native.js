import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M13.255 3.098l1.49 1.334-2.668 2.98-1.49-1.334z" />
      <Path d="M12 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zM18 16h-3v-1c0-1.104-.897-2-2-2h-2c-1.103 0-2 .896-2 2v1H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-7-1h2v1h-2v-1zm-2 7H7v-4h2v4zm8 0h-2v-4h2v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
