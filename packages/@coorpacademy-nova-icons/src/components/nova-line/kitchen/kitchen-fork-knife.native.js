import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M15.707 2.293A.998.998 0 0 0 14 3v19h2v-6h2a1 1 0 0 0 1-1c0-9.306-3.158-12.572-3.293-12.707zM16 14V7.243c.487 1.6.908 3.808.986 6.757H16zM10 8c0 .737-.405 1.375-1 1.723V2H7v7.723C6.405 9.375 6 8.737 6 8V2H4v6c0 1.858 1.279 3.411 3 3.858V22h2V11.858c1.721-.448 3-2 3-3.858V2h-2v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
