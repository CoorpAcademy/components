import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.228 17.684a1 1 0 0 0-.949-.684H19v-7h-2v7h-2v-7h-2v7h-2v-7H9v7H7v-7H5v7H3.721c-.43 0-.812.275-.949.684l-.334 1A1 1 0 0 0 3.388 20h17.225a1 1 0 0 0 .949-1.316l-.334-1zM19 7a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5H2v2h20V7h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
