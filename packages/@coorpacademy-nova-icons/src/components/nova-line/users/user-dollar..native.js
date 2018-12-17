import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.971 12.758c-.146-.585-.279-1.167-.41-1.738C19.547 6.586 18.499 2 12.001 2c-4.411 0-8 3.589-8 8v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2h1c1.103 0 2-.897 2-2v-3h1a.998.998 0 0 0 .97-1.242zM18.001 12a1 1 0 0 0-1 1v4h-2a1 1 0 0 0-1 1v2h-8V10c0-3.309 2.691-6 6-6 4.685 0 5.489 2.561 6.611 7.465l.123.535h-.734z" />
      <Path d="M13.001 6h-2v1.051c-1.14.232-2 1.242-2 2.449 0 1.379 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1h-3.5v2h2v1h2v-1.051c1.14-.232 2-1.242 2-2.449 0-1.379-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1h3.5V7h-2V6z" />
    </G>
  </Svg>
);

export default SvgComponent;
