import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.142 5.122a1.999 1.999 0 0 0-2.829 0l-.176.177-2.828-2.829-1.061 1.061 2.828 2.829-1.06 1.06-2.829-2.828-1.061 1.06 2.829 2.828-1.061 1.06-2.829-2.829-1.061 1.061 2.829 2.829-1.061 1.061-2.828-2.828-1.06 1.061 2.829 2.829-5.128 5.126a2 2 0 0 0 2.829 2.828L21.142 7.949a1.998 1.998 0 0 0 0-2.827z"
    />
  </Svg>
);

export default SvgComponent;
