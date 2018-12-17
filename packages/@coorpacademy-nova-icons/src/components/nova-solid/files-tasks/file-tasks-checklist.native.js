import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 17.415l-3.707-3.708 1.414-1.413L11 16.586l4.293-4.293 1.414 1.413L11 19.415zm0-8L7.293 7.707l1.414-1.413L11 8.586l4.293-4.293 1.414 1.413L11 11.415z"
    />
  </Svg>
);

export default SvgComponent;
