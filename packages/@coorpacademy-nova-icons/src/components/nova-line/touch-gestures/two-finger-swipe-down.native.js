import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 11.5c0-3.593-1.59-6.967-4.363-9.256l-1.273 1.542A9.976 9.976 0 0 1 19 11.5c0 2.19-.715 4.277-2 5.991V16h-2v5h5v-2h-1.643A11.951 11.951 0 0 0 21 11.5z" />
      <Path d="M17 14v-2h-5.613l.333-1H16V9H9V8a1 1 0 0 0-1.447-.894l-4 2A.998.998 0 0 0 3 10v6a1 1 0 0 0 1 1h5a1 1 0 0 0 .949-.684L10.721 14H17zm-8.721 1H5v-4.381l2-1V10a1 1 0 0 0 1 1h1.613l-1.334 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
