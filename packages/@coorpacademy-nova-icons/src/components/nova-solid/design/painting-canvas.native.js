import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15 3v2H9V3H2v12h20V3z" />
      <Path d="M10 2h4v2h-4zM10.586 16l-6 6h2.828L11 18.414V22h2v-3.586L16.586 22h2.828l-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
