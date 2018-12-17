import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M12 21c-4.055 0-7.489-2.696-8.611-6.389L6 12H0v6l1.827-1.827C3.475 20.174 7.412 23 12 23c5.382 0 9.865-3.888 10.809-9h-2.04c-.914 4.002-4.495 7-8.769 7zM22.173 7.827C20.525 3.827 16.588 1 12 1 6.618 1 2.135 4.888 1.191 10h2.04C4.145 5.998 7.726 3 12 3c4.055 0 7.489 2.696 8.611 6.389L18 12h6V6l-1.827 1.827z" />
      <Path d="M16 10a4 4 0 0 0-8 0c0 3 4 8 4 8s4-5 4-8zm-6 0a2 2 0 1 1 4.001.001A2 2 0 0 1 10 10z" />
    </G>
  </Svg>
);

export default SvgComponent;
