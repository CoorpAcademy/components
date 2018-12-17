import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 8.352V7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v1.352C7.933 8.904 6 10.281 6 13v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8c0-2.719-1.933-4.096-3-4.648zM10 4h4v1h-4V4zm6 16H8v-7c0-2.224 2.227-3.021 2.316-3.051A1 1 0 0 0 11 9V7h2v2c0 .427.275.808.678.947C13.773 9.979 16 10.776 16 13v7z" />
      <Path d="M14 12h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-1 3h-2v-1h2v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
