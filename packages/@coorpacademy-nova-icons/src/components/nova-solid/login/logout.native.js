import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2H7c-1.103 0-2 .898-2 2v7h7.59l-2.297-2.292 1.413-1.416 4.708 4.699-4.706 4.715-1.416-1.412L12.582 13H5v7c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2z"
    />
  </Svg>
);

export default SvgComponent;
