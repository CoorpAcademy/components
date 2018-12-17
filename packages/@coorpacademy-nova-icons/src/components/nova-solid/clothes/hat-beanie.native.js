import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24H.001z" />
    <G fill="currentColor">
      <Path d="M16 5h-1.586l1.293-1.293-1.414-1.414L13 3.586V2h-2v1.586L9.707 2.293 8.293 3.707 9.586 5H8v2h8zM12 8c-4.486 0-8 4.393-8 10h16c0-5.607-3.514-10-8-10zM20 19H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
