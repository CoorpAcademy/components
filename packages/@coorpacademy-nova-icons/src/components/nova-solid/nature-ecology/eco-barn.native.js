import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.707 11.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a.999.999 0 0 0 .707-1.707zM12 7a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 7zm2.198 6L12 14.799 9.802 13h4.396zM8 14.11l2.421 1.98L8 18.073V14.11zM8.802 20L12 17.383 15.198 20H8.802zM16 18.073l-2.421-1.982L16 14.11v3.963z"
    />
  </Svg>
);

export default SvgComponent;
