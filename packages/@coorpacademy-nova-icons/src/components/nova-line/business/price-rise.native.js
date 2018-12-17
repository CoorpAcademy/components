import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 14v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-6-1h4v1h-4v-1zm1 3h4v1h-4v-1zm3 4h-4v-1h4v1zM10 17v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-6-1h4v1H4v-1zm5 4H5v-1h4v1zM13.707 9.707L18 5.414V8h2V2h-6v2h2.586L13 7.586l-2.293-2.293a1 1 0 0 0-1.414 0l-6 6 1.414 1.414L10 7.415l2.293 2.292a.999.999 0 0 0 1.414 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
