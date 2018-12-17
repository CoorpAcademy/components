import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 4h3v5h-3zM19 10h3v5h-3zM16 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5.393 12.949a.527.527 0 0 1 .747 0l1.492 1.492a.528.528 0 0 1 0 .746l-1.492 1.492a.529.529 0 0 1-.747 0l-1.864-1.864.01-.01a6.591 6.591 0 0 1 0-8.934l-.01-.01 1.864-1.866a.529.529 0 0 1 .747 0l1.492 1.492a.528.528 0 0 1 0 .746l-1.492 1.493a.529.529 0 0 1-.747 0l-.727-.725a4.994 4.994 0 0 0 0 6.676l.727-.728z" />
    </G>
  </Svg>
);

export default SvgComponent;
