import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 19V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L11 13.586c1.999-2.591 3.893-3.585 7-3.585V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h9.079A7.946 7.946 0 0 1 10.069 19H3zm9-18l5 5h-5V1z" />
      <Path d="M5 16.414V17h5.069c.054-.434.141-.858.262-1.268C10.319 15.722 8 13.414 8 13.414l-3 3zM18 12c-3.309 0-6 2.694-6 6a6.006 6.006 0 0 0 6 6.001c3.308 0 6-2.691 6-6.001 0-3.306-2.692-6-6-6zm1 10.001h-2V18h2v4.001zm-1-5.006a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
