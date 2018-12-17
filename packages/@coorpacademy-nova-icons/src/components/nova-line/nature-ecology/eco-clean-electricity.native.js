import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 3h2v2H2zM2 7h2v2H2zM23 12c0-2.033-2.94-6.225-4-7.759-.691 1-4 5.612-4 7.759 0 1.858 1.28 3.411 3 3.858V17c0 1.379-1.122 2.5-2.5 2.5S13 18.379 13 17V8c0-1.654-1.346-3-3-3V4c0-1.104-.897-2-2-2H5v8h3c1.103 0 2-.897 2-2V7c.551 0 1 .449 1 1v9c0 2.482 2.019 4.5 4.5 4.5S20 19.482 20 17v-1.142c1.72-.447 3-2 3-3.858zM7 8V4h1l.001 4H7zm13 5.723V11h-2v2.723c-.595-.348-1-.986-1-1.723 0-.662.933-2.474 2-4.179 1.067 1.705 2 3.517 2 4.179 0 .737-.405 1.375-1 1.723z" />
    </G>
  </Svg>
);

export default SvgComponent;
