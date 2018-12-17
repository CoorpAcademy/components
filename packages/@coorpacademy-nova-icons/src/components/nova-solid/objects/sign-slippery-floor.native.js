import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M10.715 14.699A2.95 2.95 0 0 0 12 15c1.654 0 3-1.346 3-3a2.95 2.95 0 0 0-.301-1.285l-3.984 3.984z" />
      <Path d="M18.994 2.89A1 1 0 0 0 18 2H6a1 1 0 0 0-.994.89l-2 18A.998.998 0 0 0 4 22h4a1 1 0 0 0 .949-.684L9.721 19h4.559l.772 2.316A.998.998 0 0 0 16 22h4a.997.997 0 0 0 .994-1.11l-2-18zM9 3h6v2H9V3zm3 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <Path d="M13.285 9.301A2.95 2.95 0 0 0 12 9c-1.654 0-3 1.346-3 3 0 .462.113.894.301 1.285l3.984-3.984z" />
    </G>
  </Svg>
);

export default SvgComponent;
