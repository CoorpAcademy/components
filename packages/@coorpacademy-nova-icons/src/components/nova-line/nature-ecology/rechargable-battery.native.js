import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 5h-4a1 1 0 0 0-1 1v1H8a1 1 0 0 0-1 1v8c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V8a1 1 0 0 0-1-1h-1V6a1 1 0 0 0-1-1zm1.001 11H9V9h1a1 1 0 0 0 1-1V7h2v1a1 1 0 0 0 1 1h1l.001 7z" />
      <Path d="M12.5 10L10 13h1.5v2l2.5-3h-1.5z" />
      <Path d="M12 21c-4.054 0-7.489-2.696-8.611-6.389L6 12H0v6l1.827-1.827C3.475 20.174 7.412 23 12 23c5.382 0 9.865-3.888 10.809-9h-2.041c-.913 4.002-4.494 7-8.768 7zM22.173 7.827C20.525 3.827 16.588 1 12 1 6.618 1 2.135 4.888 1.191 10h2.041C4.145 5.998 7.726 3 12 3c4.055 0 7.489 2.696 8.611 6.389L18 12h6V6l-1.827 1.827z" />
    </G>
  </Svg>
);

export default SvgComponent;
