import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M10.364 21l-.149.821A1 1 0 0 0 11.198 23h6.707a1 1 0 0 0 .996-1.09l-.083-.91h-8.454zM10.727 19h7.909L18 12V4c0-.96-1.224-1.369-1.8-.6l-4.08 5.44-6.141.877C4.891 9.873 4 10.9 4 12v1c0 1.1.9 2 2 2h5.455l-.728 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
