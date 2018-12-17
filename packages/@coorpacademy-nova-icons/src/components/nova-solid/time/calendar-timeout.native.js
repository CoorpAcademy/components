import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18a8 8 0 0 1 8-8c.692 0 1.359.097 2 .263V4.999c0-1.102-.897-2-2-2h-2v-3h-2v3H6v-3H4v3H2c-1.103 0-2 .898-2 2v13c0 1.102.897 2 2 2h8.262A7.99 7.99 0 0 1 10 18zM2 4.999h16v3H2v-3z" />
      <Path d="M18 11.984c-3.309 0-6 2.692-6 6 0 3.307 2.691 6 6 6s6-2.693 6-6c0-3.308-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
