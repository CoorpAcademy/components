import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18.077 16.07c3.897-3.899 3.897-10.243 0-14.143l-1.414 1.414c3.118 3.119 3.118 8.195 0 11.314A7.941 7.941 0 0 1 11.006 17a7.94 7.94 0 0 1-5.656-2.344L3.935 16.07a9.922 9.922 0 0 0 6.071 2.88V20h-5v2h12v-2h-5v-1.049a9.926 9.926 0 0 0 6.071-2.881z" />
      <Path d="M11.006 15c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
