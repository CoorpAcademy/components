import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4c-1.103 0-2 .897-2 2v3h2V4h16v3h2V4c0-1.103-.897-2-2-2zM19.997 20H4v-3H2v3c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-3h-2.002l-.001 3zM19 16v-6h2V8h-6v2h2v6zM10 8v8h5v-2h-3V8zM9 16V9a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7h2v-2h2v2h2zm-4-4v-2h2v2H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
