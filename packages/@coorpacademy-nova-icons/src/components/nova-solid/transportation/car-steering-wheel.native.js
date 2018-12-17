import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 2c3.35 0 6.221 2.073 7.411 5H4.589C5.779 6.073 8.65 4 12 4zm0 9a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 13zm-7.931 0H8a2 2 0 0 1 2 2v4.736A8.008 8.008 0 0 1 4.069 13zM14 19.736V15a2 2 0 0 1 2-2h3.931A8.008 8.008 0 0 1 14 19.736z"
    />
  </Svg>
);

export default SvgComponent;
