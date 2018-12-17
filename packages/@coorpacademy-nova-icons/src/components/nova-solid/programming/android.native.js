import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 10H5a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v6h2v-7a1 1 0 0 0-1-1zM7.001 7.999a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54-1.414-1.415-1.54 1.54a4.977 4.977 0 0 0-5.507.001l-1.54-1.54-1.414 1.414 1.54 1.54a4.97 4.97 0 0 0-.832 2.752z" />
    </G>
  </Svg>
);

export default SvgComponent;
