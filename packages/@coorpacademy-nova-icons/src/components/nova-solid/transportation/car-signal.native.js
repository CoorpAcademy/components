import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M22 17.002l-4-7h-2v2h1l2 4H5l2-4h.877v-2H6l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5zm-13 3H4v-2h5v2zm11 0h-5v-2h5v2z" />
      <Path d="M10.652 10.592l1.41 1.41 1.409-1.41a1.955 1.955 0 0 0-1.409-.59c-.55 0-1.05.221-1.41.59zM16.305 7.759A5.941 5.941 0 0 0 12.067 6a6.031 6.031 0 0 0-4.241 1.767l1.427 1.427C9.999 8.442 10.987 8 12.067 8c1.078 0 2.064.44 2.81 1.188l1.428-1.429z" />
      <Path d="M12.067 4c2.134 0 4.154.852 5.649 2.347l1.413-1.412A9.975 9.975 0 0 0 12.067 2 9.97 9.97 0 0 0 5 4.94l1.413 1.414A7.972 7.972 0 0 1 12.067 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
