import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.58 10h-.57c.19.001.377.015.564.028L18.58 10zM17.99 10H1.42l1.604 7.217A.998.998 0 0 0 4 18h6a8 8 0 0 1 7.99-8zM20 9V7.001h-3.42L12.868.504l-1.736.992 3.145 5.505H5.723l3.145-5.505L7.132.504 3.42 7.001H0V9zM24 16.286h-4.286L18 12l-1.715 4.286H12l3.708 3.13L13.714 24 18 21.166 22.285 24l-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
