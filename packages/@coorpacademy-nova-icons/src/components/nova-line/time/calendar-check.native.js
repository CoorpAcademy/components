import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M15 3H8V1H6v6h2V5h7zM11 17.414l-3.707-3.707 1.414-1.414L11 14.586l4.293-4.293 1.414 1.414z"
    />
  </Svg>
);

export default SvgComponent;
