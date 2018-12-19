import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4.428 13.88l8.569-8.571L18.689 11l-8.568 8.57zM20.104 9.59l.72-.719a4.031 4.031 0 0 0 0-5.693 4.031 4.031 0 0 0-5.693 0l-.719.72 5.692 5.692zM8.4 20.68l-5.156 1.288a1 1 0 0 1-1.213-1.212L3.32 15.6l5.08 5.08z" />
    </G>
  </Svg>
);

export default SvgComponent;
