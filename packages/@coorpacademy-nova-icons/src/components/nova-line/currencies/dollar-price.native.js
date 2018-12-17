import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 7h-2v1.051c-1.14.232-2 1.242-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V8h-2V7z" />
      <Path d="M21 7.432V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.432A4.99 4.99 0 0 0 0 12a4.99 4.99 0 0 0 3 4.568V19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.432c1.8-.784 3-2.565 3-4.568 0-2.002-1.2-3.784-3-4.568zm-1.251 7.458c-.44.115-.749.513-.749.968V18H5v-2.142a1 1 0 0 0-.749-.968C2.926 14.547 2 13.358 2 12s.926-2.547 2.251-2.89c.441-.115.749-.513.749-.968V6h14v2.142c0 .456.309.854.749.969C21.074 9.453 22 10.642 22 12s-.926 2.547-2.251 2.89z" />
    </G>
  </Svg>
);

export default SvgComponent;
