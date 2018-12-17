import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M21 18H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM8 16h12V4H8v12z"
      fill="currentColor"
    />
    <Path
      d="M18 22H3a1 1 0 0 1-1-1V6h2v14h14v2zM18 15h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm-3-2h2V7h-2v6z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M10 5h2v10h-2z" />
  </Svg>
);

export default SvgComponent;
