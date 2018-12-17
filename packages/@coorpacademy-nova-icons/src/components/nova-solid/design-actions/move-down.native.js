import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.293 14.293L19 16.586V11h-2v5.586l-2.293-2.293-1.414 1.414L18 20.414l4.707-4.707zM17 8h2v2h-2zM17 5h2v2h-2zM2 2h9v9H2zM2 22h9v-9H2v9zm2-7h5v5H4v-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
