import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 8c0 .737-.405 1.375-1 1.723V2H6v7.723C5.405 9.375 5 8.737 5 8V2H3v6c0 1.858 1.279 3.411 3 3.858V22h2V11.858c1.721-.448 3-2 3-3.858V2H9v6zM17 2c-2.205 0-4 1.795-4 4v2c0 1.858 1.279 3.411 3 3.858V22h2V11.858c1.721-.448 3-2 3-3.858V6c0-2.205-1.795-4-4-4zm2 6c0 1.103-.896 2-2 2s-2-.897-2-2V6a2 2 0 0 1 4 0v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
