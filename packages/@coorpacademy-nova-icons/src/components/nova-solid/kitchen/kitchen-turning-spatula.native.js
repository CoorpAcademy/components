import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M3.708 21.707l-1.414-1.413 5-5 1.413 1.413zM21.707 9.293l-7-7a.999.999 0 0 0-1.414 0l-4 4c-2.397 2.397-.451 7.504-.222 8.078.103.255.304.456.558.558.098.04 2.427.96 4.668.96 1.479 0 2.626-.398 3.41-1.183l4-4a.998.998 0 0 0 0-1.413zm-11.414 0l4-4 1.414 1.413-4 4-1.414-1.413zm4.414 4.414l-1.414-1.413 4-4 1.414 1.413-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
