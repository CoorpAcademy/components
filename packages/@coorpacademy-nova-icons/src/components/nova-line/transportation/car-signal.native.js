import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M18.618 10H16v2h1.382l2 4H4.618l2-4H8v-2H5.382L2 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-5.236L18.618 10zM15 20H9v-2h6v2zM4 18h3v2H4v-2zm13 2v-2h3v2h-3z" />
      <Path d="M10.652 10.592l1.41 1.41 1.409-1.41a1.955 1.955 0 0 0-1.409-.59c-.55 0-1.05.221-1.41.59zM16.305 7.759A5.94 5.94 0 0 0 12.067 6a6.031 6.031 0 0 0-4.241 1.767l1.427 1.427C9.999 8.442 10.987 8 12.067 8c1.078 0 2.063.44 2.81 1.188l1.428-1.429z" />
      <Path d="M12.067 4c2.134 0 4.154.852 5.649 2.347l1.413-1.412A9.975 9.975 0 0 0 12.067 2 9.97 9.97 0 0 0 5 4.94l1.413 1.414A7.976 7.976 0 0 1 12.067 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
