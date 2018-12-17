import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.971 12.758c-.146-.585-.279-1.167-.41-1.738C19.547 6.586 18.499 2 12.001 2c-4.411 0-8 3.589-8 8v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2h1c1.103 0 2-.897 2-2v-3h1a.998.998 0 0 0 .97-1.242zM18.001 12a1 1 0 0 0-1 1v4h-2a1 1 0 0 0-1 1v2h-8V10c0-3.309 2.691-6 6-6 4.685 0 5.489 2.561 6.611 7.465l.123.535h-.734z" />
      <Path d="M11.001 6h2v2h-2zM15.649 10.078l-1.333-1.49 1.49-1.332 1.333 1.49zM6.863 8.745l1.333-1.49 1.49 1.333-1.333 1.49zM12.001 9a3 3 0 0 0-3 3c0 1.926 2 2.988 2 2.988V16a1 1 0 1 0 2 0v-1.012s2-1.063 2-2.988c0-1.656-1.344-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
