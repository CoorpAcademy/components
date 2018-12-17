import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21 13c0-4.6-4.535-11-9-11S3 8.4 3 13c0 4.899 4.081 5.861 8 5.983V20H8v2h8v-2h-3v-1.017c3.919-.122 8-1.084 8-5.983zM5 13c0-3.554 3.754-9 7-9s7 5.446 7 9c0 2.024-.541 4-7 4s-7-1.976-7-4z" />
      <Path d="M15 15h2c0-1.768-2.635-3-5-3s-5 1.232-5 3l1.992.06C9.121 14.736 10.392 14 12 14s2.879.736 3 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
