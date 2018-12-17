import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 2a1 1 0 0 0-.848.471l-5 8a.997.997 0 0 0 .141 1.236L9.086 13.5l-6.793 6.793 1.414 1.414 6.793-6.792 1.793 1.792a.999.999 0 0 0 1.236.141l8-5A1 1 0 0 0 22 11c0-2.522-6.477-9-9-9zm.145 12.73L9.27 10.856l4.206-6.73c1.724.751 5.647 4.675 6.399 6.398l-6.73 4.206z" />
      <Path d="M13.293 13.707l-3-3 1.413-1.414 3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
