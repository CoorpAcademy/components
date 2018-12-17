import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M20.121 8.707l-1.52-1.52A1.98 1.98 0 0 0 19 6V4c0-1.104-.897-2-2-2H7c-1.103 0-2 .896-2 2v2c0 .445.151.854.399 1.187l-1.52 1.52A2.98 2.98 0 0 0 3 10.828V18c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-7.172a2.98 2.98 0 0 0-.879-2.121zM7 4h10l.001 2H7V4zm12 14c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1v-7.172c0-.264.107-.521.293-.707L7.414 8h9.172l2.121 2.121c.186.187.293.443.293.707V18z" />
      <Path d="M17.007 12h-1v-1a1 1 0 1 0-2 0v2h-4v-2a1 1 0 1 0-2 0v1h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v1a1 1 0 1 0 2 0v-2h4v2a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
