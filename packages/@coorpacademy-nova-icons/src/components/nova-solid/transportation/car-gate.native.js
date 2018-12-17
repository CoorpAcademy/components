import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 11h-1a.993.993 0 0 0-.707.293L7.875 2.15 6 4.493l13 10.409V22a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1z" />
      <Path d="M4 12l-3 5v4h1v.5a1.5 1.5 0 0 0 3 0V21h6v.5a1.5 1.5 0 0 0 3 0V21h1v-4l-3-5H4zm2 8H3v-1h3v1zm4 0v-1h3v1h-3zm-7-3l1.766-3h6.469L13 17H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
