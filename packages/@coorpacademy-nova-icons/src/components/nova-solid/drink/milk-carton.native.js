import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.48 10L18.6 6.399 15 10zM17 6H5.72l-3.2 4H13zM18 3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2h12V3zM21 22a1 1 0 0 0 1-1V11h-8v10.999m-1 0V11H2v10a1 1 0 0 0 1 1h10m-3-5H4v-4h6v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
