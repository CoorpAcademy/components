import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18.161 2.804A1 1 0 0 0 17.18 2H6.82a.998.998 0 0 0-.98.804l-3.6 18A.998.998 0 0 0 3.22 22h17.56a1.001 1.001 0 0 0 .98-1.196l-3.599-18zM13 20h-2v-4h2v4zm0-6h-2v-4h2v4zm0-6h-2V4h2v4z"
    />
  </Svg>
);

export default SvgComponent;
