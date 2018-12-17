import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-8 7h4v4h-4V9zm1 10H7v-4h4v4zm6 0h-4v-4h4v4z"
    />
  </Svg>
);

export default SvgComponent;
