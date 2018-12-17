import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18a8 8 0 0 1 8-8c.692 0 1.359.097 2 .263V5.001c0-1.102-.897-2-2-2h-2v-3h-2v3H6v-3H4v3H2c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h8.262A8.006 8.006 0 0 1 10 18zM2 5.001h16v3H2v-3z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.188L17 19h-5v5l1.761-1.761A5.936 5.936 0 0 0 18 24c3.309 0 6-2.691 6-6 0-3.308-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
