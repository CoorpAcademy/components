import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M5 18.828V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.172c0-.79-.32-1.562-.879-2.121L13.414 12l4.707-4.707A2.98 2.98 0 0 0 19 5.17V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2.17c0 .802.312 1.555.879 2.121L10.586 12l-4.707 4.707A3.017 3.017 0 0 0 5 18.828zM9 4.999h6l-3 3-3-3z"
    />
  </Svg>
);

export default SvgComponent;
